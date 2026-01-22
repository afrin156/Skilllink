import { ObjectId } from "mongodb";

/**
 * One conversation between two users
 */
export interface Conversation {
  _id?: ObjectId;

  participants: ObjectId[]; 
  // exactly 2 users for now

  lastMessage?: string;

  updatedAt: Date;
  createdAt: Date;
}
