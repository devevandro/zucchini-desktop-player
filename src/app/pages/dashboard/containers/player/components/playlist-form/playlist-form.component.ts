import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Playlist } from '@models/playlist-model';

@Component({
  selector: 'app-playlist-form',
  templateUrl: './playlist-form.component.html',
  styleUrls: ['./playlist-form.component.scss']
})
export class PlaylistFormComponent implements OnInit {
  @Output() submitPlaylist: EventEmitter<Playlist> = new EventEmitter();

  public playlistForm: FormGroup;
  public submitAttempt = false;

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.playlistForm = this.initializeForm();
  }

  initializeForm(): FormGroup {
    return this.formBuilder.group({
      _id: [''],
      name: ['', Validators.required],
      image: ['', Validators.required],
    });
  }

  get name(): AbstractControl {
    return this.playlistForm.get('name');
  }

  get image(): AbstractControl {
    return this.playlistForm.get('image');
  }

  handleSubmitForm(form: FormGroup = this.playlistForm): void {
    this.submitAttempt = true;

    if (form.invalid) {
      return;
    }

    const formValues = form.getRawValue();
    this.submitPlaylist.emit(formValues);
    this.router.navigate(['/playlists']);
  }
}
