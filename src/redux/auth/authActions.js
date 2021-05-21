import { createAction } from '@reduxjs/toolkit'

export const registerRequest = createAction('auth/registerRequest') 
export const registerSuccess = createAction('auth/registerSuccess') 
export const registerError = createAction('auth/registerError') 

export const loginRequest = createAction('auth/loginRequest') 
export const loginSuccess = createAction('auth/loginSuccess') 
export const loginError = createAction('auth/loginError') 

export const getCurrentUserRequested = createAction('auth/getCurrentUserRequested')
export const getCurrentUserSuccess = createAction('auth/getCurrentUserSuccess')
export const getCurrentUserError = createAction('auth/getCurrentUserError')


export const logOut = createAction('auth/logOut') 