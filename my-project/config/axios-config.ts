import axios from "axios";

export const axiosConf = axios.create({
  baseURL: "http://localhost:4000",
});

export enum GuardedRoutes {
  // /664/* 	User must be logged to write the resource.
  onlyLoggedCanWrite = 644,
  // Everyone can read the resource.
  everyoneCanRead = 664,

  // /660/* 	User must be logged to write or read the resource.
  onlyLoggedCanWriteOrRead = 660,
  // /644/* User must own the resource to write the resource.

  OnlyLoggerCanWriteHisOwn = 644, // update or delete
  OnlyLoggerCanUpdateHisOwn = 644, // update or delete
  OnlyLoggerCanDeleteHisOwn = 644, // update or delete
  // User must be logged to read the resource.
  onlyLoggedCanRead = 640,
  // /600/* 	User must own the resource to write or read the resource.
  onlyReadWriteHisOwn = 600,
  // /444/* 	No one can write the resource.Everyone can read the resource.
  readOnly = 444,
  // /440/* 	No one can write the resource. User must be logged to read the resource.
  noWriteOnlyLoggedCanRead = 440,
  //400/* 	No one can write the resource.User must own the resource to read the resource.
  noWriteOnlyReadOwns = 400,
}
