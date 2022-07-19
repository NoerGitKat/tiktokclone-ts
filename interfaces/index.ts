export interface IPost {
  caption: string;
  video: {
    asset: {
      _id: string;
      url: string;
    };
  };
  _id: string;
  postedBy: {
    _id: string;
    userName: string;
    image: string;
  };
  likes: {
    postedBy: {
      _id: string;
      userName: string;
      image: string;
    };
  }[];
  comments: {
    comment: string;
    _key: string;
    postedBy: {
      _ref: string;
    };
  }[];
  userId: string;
}

export interface IDecodedUser {
  name: string;
  picture: string;
  sub: string;
}

export interface IUser {
  _id: string;
  _type: string;
  userName: string;
  image: string;
}

export enum MediaTypes {
  MP4 = 'video/mp4',
  WebM = 'video/webm',
  Ogg = 'video/ogg',
}
