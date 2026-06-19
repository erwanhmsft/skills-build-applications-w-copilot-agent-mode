import { Schema, model, models } from 'mongoose';

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  role: { type: String, default: 'member' },
});

const teamSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
});

const activitySchema = new Schema({
  userEmail: { type: String, required: true },
  type: { type: String, required: true },
  durationMinutes: { type: Number, required: true },
  caloriesBurned: { type: Number, required: true },
});

const leaderboardSchema = new Schema({
  userEmail: { type: String, required: true },
  score: { type: Number, required: true },
  rank: { type: Number, required: true },
});

const workoutSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  difficulty: { type: String, required: true },
  durationMinutes: { type: Number, required: true },
});

export const User = models.User || model('User', userSchema);
export const Team = models.Team || model('Team', teamSchema);
export const Activity = models.Activity || model('Activity', activitySchema);
export const LeaderboardEntry = models.LeaderboardEntry || model('LeaderboardEntry', leaderboardSchema);
export const Workout = models.Workout || model('Workout', workoutSchema);
