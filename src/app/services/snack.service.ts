import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { tap } from 'rxjs/operators';
import { pipe } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SnackService {

  constructor(private snackBar: MatSnackBar, private router: Router) { }

  authError(){
    this.snackBar.open("You must log in!", 'Ok',{
      duration:5000
    });

    return this.snackBar._openedSnackBarRef
    .onAction()
    .pipe(
      tap(_ =>
        this.router.navigate(['/login'])
      )
    )
    .subscribe()
  }
}
