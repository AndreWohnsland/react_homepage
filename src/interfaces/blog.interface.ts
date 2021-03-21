import { Document } from 'mongoose';

export interface IBlog {
  title: String;
  description: String;
  text: String;
  draft: boolean;
  createdAt: Date;
  modifiedAt: Date;
}

export interface IBlogModel extends IBlog, Document {}
