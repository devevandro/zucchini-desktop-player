import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AngularFireStorage } from '@angular/fire/compat/storage';
import {
  AngularFireDatabase,
  AngularFireList,
} from '@angular/fire/compat/database';

import { Playlist } from '@models/playlist-model';
import { Notification } from '@models/notification.interface';
import { UtilsService } from 'src/app/providers/utils.service';

@Component({
  selector: 'app-playlist-form',
  templateUrl: './playlist-form.component.html',
  styleUrls: ['./playlist-form.component.scss']
})
export class PlaylistFormComponent implements OnInit {
  @Output() submitPlaylist: EventEmitter<Playlist> = new EventEmitter();

  public playlistForm: FormGroup;
  public submitAttempt = false;
  public url = '';

  constructor(
    private formBuilder: FormBuilder, private router: Router,
    private angularFireStorage: AngularFireStorage,
    private db: AngularFireDatabase,
    private utilsService: UtilsService
    ) { }

  ngOnInit(): void {
    this.playlistForm = this.initializeForm();
  }

  initializeForm(): FormGroup {
    return this.formBuilder.group({
      _id: [''],
      name: ['', Validators.required],
    });
  }

  get name(): AbstractControl {
    return this.playlistForm.get('name');
  }

  /* get image(): AbstractControl {
    return this.playlistForm.get('image');
  } */

  handleSubmitForm(form: FormGroup = this.playlistForm): void {
    this.submitAttempt = true;

    if (form.invalid) {
      return;
    }

    const formValues = form.getRawValue();
    let notification = {} as Notification;
    const ref: AngularFireList<any> = this.db.list(`albums-list`);
    // this.submitPlaylist.emit(formValues);
    ref.push({
      name: formValues.name,
      image: this.url
    })
    .then((value) => {
      notification = {
        type: 'success',
        title: 'Foto salva com sucesso!!',
      } as Notification;

      value.get().then(keys => {
        ref.update(`${keys}`, { key: keys });
      });
      })
      .catch(() => {
        notification = {
          type: 'warning',
          title: `Erro ao salvar a foto!'}`,
        };
      }).finally(() => {
        this.utilsService.notificationToast(notification);
      });
  }

  handleUploadImage($event): void {
    const path = $event.target.files[0];

    this.angularFireStorage.upload('/albuns' + Math.random() + path, path)
      .then((value) => {
        console.log(value.metadata);
        value.ref.getDownloadURL().then((url) => {
          this.url = url;
        });
      })
      .catch(() => {
        console.log('error');
      })
      .finally(() => {
        console.log();
      });
  }
}
