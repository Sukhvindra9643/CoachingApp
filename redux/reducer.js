import { createReducer } from "@reduxjs/toolkit";
const initialState = {};
// export const authReducer = createReducer(
//   initialState,
//   {
//     loginRequest: (state) => {
//       state.loading = true;
//     },
//     loginSuccess: (state, action) => {
//       state.loading = false;
//       state.isAuthenticated = true;
//       state.user = action.payload.user;
//       state.message = action.payload.message;
//     },
//     loginFailure: (state, action) => {
//       state.loading = false;
//       state.isAuthenticated = false;
//       state.error = action.payload;
//     },

//     registerRequest: (state) => {
//       state.loading = true;
//     },
//     registerSuccess: (state, action) => {
//       state.loading = false;
//       state.isAuthenticated = true;
//       state.user = action.payload.user;
//       state.message = action.payload.message;
//     },
//     registerFailure: (state, action) => {
//       state.loading = false;
//       state.isAuthenticated = false;
//       state.error = action.payload;
//     },

//     loadUserRequest: (state) => {
//       state.loading = true;
//     },
//     loadUserSuccess: (state, action) => {
//       state.loading = false;
//       state.isAuthenticated = true;
//       state.user = action.payload.user;
//     },
//     loadUserFailure: (state, action) => {
//       state.loading = false;
//       state.isAuthenticated = false;
//       state.error = action.payload;
//     },

//     logoutRequest: (state) => {
//       state.loading = true;
//     },
//     logoutSuccess: (state) => {
//       state.loading = false;
//       state.isAuthenticated = false;
//       state.user = null;
//     },
//     logoutFailure: (state, action) => {
//       state.loading = false;
//       state.isAuthenticated = true;
//       state.error = action.payload;
//     },

//     verificationRequest: (state) => {
//       state.loading = true;
//     },
//     verificationSuccess: (state, action) => {
//       state.loading = false;
//       state.message = action.payload;
//     },
//     verificationFailure: (state, action) => {
//       state.loading = false;
//       state.error = action.payload;
//     },

//     clearError: (state) => {
//       state.error = null;
//     },

//     clearMessage: (state) => {
//       state.message = null;
//     },
//   }
// );

// export const messageReducer = createReducer(
//   initialState,
//   {
//     addTaskRequest: (state) => {
//       state.loading = true;
//     },
//     addTaskSuccess: (state, action) => {
//       state.loading = false;
//       state.message = action.payload;
//     },
//     addTaskFailure: (state, action) => {
//       state.loading = false;
//       state.error = action.payload;
//     },

//     updateTaskRequest: (state) => {
//       state.loading = true;
//     },
//     updateTaskSuccess: (state, action) => {
//       state.loading = false;
//       state.message = action.payload;
//     },
//     updateTaskFailure: (state, action) => {
//       state.loading = false;
//       state.error = action.payload;
//     },

//     deleteTaskRequest: (state) => {
//       state.loading = true;
//     },
//     deleteTaskSuccess: (state, action) => {
//       state.loading = false;
//       state.message = action.payload;
//     },
//     deleteTaskFailure: (state, action) => {
//       state.loading = false;
//       state.error = action.payload;
//     },

//     updateProfileRequest: (state) => {
//       state.loading = true;
//     },
//     updateProfileSuccess: (state, action) => {
//       state.loading = false;
//       state.message = action.payload;
//     },
//     updateProfileFailure: (state, action) => {
//       state.loading = false;
//       state.error = action.payload;
//     },

//     updatePasswordRequest: (state) => {
//       state.loading = true;
//     },
//     updatePasswordSuccess: (state, action) => {
//       state.loading = false;
//       state.message = action.payload;
//     },
//     updatePasswordFailure: (state, action) => {
//       state.loading = false;
//       state.error = action.payload;
//     },

//     forgetPasswordRequest: (state) => {
//       state.loading = true;
//     },
//     forgetPasswordSuccess: (state, action) => {
//       state.loading = false;
//       state.message = action.payload;
//     },
//     forgetPasswordFailure: (state, action) => {
//       state.loading = false;
//       state.error = action.payload;
//     },

//     resetPasswordRequest: (state) => {
//       state.loading = true;
//     },
//     resetPasswordSuccess: (state, action) => {
//       state.loading = false;
//       state.message = action.payload;
//     },
//     resetPasswordFailure: (state, action) => {
//       state.loading = false;
//       state.error = action.payload;
//     },

//     clearError: (state) => {
//       state.error = null;
//     },

//     clearMessage: (state) => {
//       state.message = null;
//     },
//   }
// );

export const authReducer = createReducer(initialState,builder => {
  builder.addCase("loginRequest", (state) => {
    state.loading = true;
  });
  builder.addCase("loginSuccess", (state, action) => {
    state.loading = false;
    state.isAuthenticated = true;
    state.user = action.payload.user;
    state.message = action.payload.message;
  });
  builder.addCase( "loginFailure", (state, action) => {
    state.loading = false;
    state.isAuthenticated = false;
    state.error = action.payload;
  });
  builder.addCase( "registerRequest", (state) => {
    state.loading = true;
  });
  builder.addCase("registerSuccess", (state, action) => {
    state.loading = false;
    state.isAuthenticated = true;
    state.user = action.payload.user;
    state.message = action.payload.message;
  });
  builder.addCase("registerFailure", (state, action) => {
    state.loading = false;
    state.isAuthenticated = false;
    state.error = action.payload;
  });
  builder.addCase("loadUserRequest", (state) => {
    state.loading = true;
  });
  builder.addCase("loadUserSuccess", (state, action) => {
    state.loading = false;
    state.isAuthenticated = true;
    state.user = action.payload.user;
  });
  builder.addCase("loadUserFailure", (state, action) => {
    state.loading = false;
    state.isAuthenticated = false;
    state.error = action.payload;
  });
  builder.addCase("logoutRequest", (state) => {
    state.loading = true;
  });
  builder.addCase("logoutSuccess", (state) => {
    state.loading = false;
    state.isAuthenticated = false;
    state.user = null;
  });
  builder.addCase("logoutFailure", (state, action) => {
    state.loading = false;
    state.isAuthenticated = true;
    state.error = action.payload;
  });
  builder.addCase("verificationRequest", (state) => {
    state.loading = true;
  });
  builder.addCase("verificationSuccess", (state, action) => {
    state.loading = false;
    state.message = action.payload;
  });
  builder.addCase("verificationFailure", (state, action) => {
    state.loading = false;
    state.error = action.payload;
  });
  builder.addCase("clearError", (state) => {
    state.error = null;
  });
  builder.addCase("clearMessage", (state) => {
    state.message = null;
  });
})
export const messageReducer = createReducer(initialState,builder => {
  builder.addCase("addTaskRequest", (state) => {
    state.loading = true;
  }),
  builder.addCase("addTaskSuccess", (state, action) => {
      state.loading = false;
      state.message = action.payload;
    }),
    builder.addCase("addTaskFailure", (state, action) => {
      state.loading = false;
      state.error = action.payload;
    }),
    builder.addCase("updateTaskRequest", (state) => {
      state.loading = true;
    }),
    builder.addCase("updateTaskSuccess", (state, action) => {
      state.loading = false;
      state.message = action.payload;
    }),
    builder.addCase("updateTaskFailure", (state, action) => {
      state.loading = false;
      state.error = action.payload;
    }),
    builder.addCase( "deleteTaskRequest", (state) => {
      state.loading = true;
    }),
    builder.addCase( "deleteTaskSuccess", (state, action) => {
      state.loading = false;
      state.message = action.payload;
    }),
    builder.addCase("deleteTaskFailure", (state, action) => {
      state.loading = false;
      state.error = action.payload;
    }),
    builder.addCase("updateProfileRequest", (state) => {
      state.loading = true;
    }),
    builder.addCase("updateProfileSuccess", (state, action) => {
      state.loading = false;
      state.message = action.payload;
    }),
    builder.addCase( "updateProfileFailure",(state, action) => {
      state.loading = false;
      state.error = action.payload;
    }),
    builder.addCase("updatePasswordRequest", (state) => {
      state.loading = true;
    }),
    builder.addCase("updatePasswordSuccess", (state, action) => {
      state.loading = false;
      state.message = action.payload;
    }),
    builder.addCase("updatePasswordFailure", (state, action) => {
      state.loading = false;
      state.error = action.payload;
    }),
    builder.addCase("forgetPasswordRequest", (state) => {
      state.loading = true;
    }),
    builder.addCase("forgetPasswordSuccess", (state, action) => {
      state.loading = false;
      state.message = action.payload;
    }),
    builder.addCase("forgetPasswordFailure", (state, action) => {
      state.loading = false;
      state.error = action.payload;
    }),
    builder.addCase("resetPasswordRequest", (state) => {
      state.loading = true;
    }),
    builder.addCase("resetPasswordSuccess", (state, action) => {
      state.loading = false;
      state.message = action.payload;
    }),
    builder.addCase("resetPasswordFailure", (state, action) => {
      state.loading = false;
      state.error = action.payload;
    }),
    builder.addCase("clearError", (state) => {
      state.error = null;
    }),
    builder.addCase("clearMessage", (state) => {
      state.message = null;
    })
})