import { Observable } from "rxjs";
import axios from "axios";

export const createHttpObservable = url =>
  Observable.create(async observer => {
    try {
      const res = await axios(url);
      await observer.next(res.data);
      await observer.complete();
    } catch (er) {
      observer.error(er);
    }
  });
