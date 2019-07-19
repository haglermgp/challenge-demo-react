// import { onPost } from '../../utils'
// import { POST_URL } from '../../utils/constants'
// import firebase from 'firebase/app'
// import 'firebase/auth';

// const verifyIdToken = () => async dispatch => {
//   dispatch({ type: `USER_STATUS_POST` })

//   await firebase.auth().onAuthStateChanged(function(userData) {
//     if (userData) {
//       const idToken = userData.getIdToken()

//       idToken
//         .then(token => {
//           /* eslint-disable flowtype/require-valid-file-annotation */
//           // console.log('token =>>>>>>>>>>>>>>>>>>>', token)
//           window.sessionStorage.setItem('sessionFynancy', token)
//           dispatch(userValidate({
//             // user_email: userData.email,
//             user_phone: userData.phoneNumber
//           }))
//         })
//         .catch(err => {
//           console.log('err idToken >>>', err)
//           /* eslint-disable flowtype/require-valid-file-annotation */
//           window.sessionStorage.removeItem('sessionFynancy')
//         })
//     }
//   })
// }

// const logOut = (history) => dispatch => {
//   firebase.auth().signOut()
//     .then(res => {
//       // Sign-out successful.
//       /* eslint-disable flowtype/require-valid-file-annotation */
//       window.sessionStorage.removeItem('sessionFynancy')
//       window.localStorage.removeItem('firebaseui::rememberedAccounts')
//       dispatch({ type: 'USER_LOGOUT' })
//       if (history === undefined) {
//         history.push('/')
//       } else {
//         window.location.href = "/"
//       }
//     })
//     .catch(err => {
//       console.log('err logOut >>>>', err)
//       // An error happened
//     });
// }

// const userValidate = (data) => dispatch => {
//   const url = POST_URL.USER;

//   const newMaintenance = onPost({
//     url,
//     data
//   })

//   newMaintenance
//     .then(res => {

//       dispatch({ type: `USER_STATUS_POST_RES`, info: 'Bienvenido a Fynancy' })

//       let newData = res.data.data

//       // console.log(`${url} POST RESPONSE >>>>`, res)
//       dispatch({
//         type: 'UPDATE_USER',
//         user: newData
//       })

//       dispatch({ type: 'LOAD_PROFILE', profile: newData.profile })
//       dispatch({ type: 'LOAD_RESUME_HISTORY_SHARE_CODE', resumeShareCodeHistory: newData.resumeHSC })

//       dispatch({ type: `USER_RESET_STATUS` })
//     })
//     .catch(err => {
//       console.log(`${url} ERROR >>>`, err)
//       dispatch({ type: `USER_STATUS_POST_ERR`, info: 'Ocurrió un problema al ingresar, por favor intente de nuevo' })
//       dispatch(logOut())
//     })
// }

// export {
//   verifyIdToken,
//   logOut,
// }
