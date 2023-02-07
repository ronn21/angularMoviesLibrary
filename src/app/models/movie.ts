// create new data type Movie
export interface Movie {
    _title: string;
    _id: number;
    _year?: number;        // optional
    _desc?: string;       // optional
  }