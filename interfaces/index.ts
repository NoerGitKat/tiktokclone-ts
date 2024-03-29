export interface IComment {
  comment: string;
  _key: string;
  postedBy: {
    _id: string;
    _ref: string;
  };
}

export interface ILike {
  _ref: string;
  _key: string;
}

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
  likes: ILike[];
  comments: IComment[];
  userId: string;
}

export interface IProfile {
  user: IUser;
  userVideos: IPost[];
  userLikedVideos: IPost[];
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

export enum Topics {
  development = 'Development',
  comedy = 'Comedy',
  gaming = 'Gaming',
  food = 'Food',
  dance = 'Dance',
  beauty = 'Beauty',
  animals = 'Animals',
  sports = 'Sports',
}

export interface ITopic {
  name: string;
  icon: JSX.Element;
}

export interface INewPost {
  _type: string;
  caption: string;
  topic: string;
  video: {
    _type: string;
    asset: {
      _type: string;
      _ref: string;
    };
  };
  userId: string;
  postedBy: {
    _type: string;
    _ref: string;
  };
  likes: ILike[];
  comments: IComment[];
}
