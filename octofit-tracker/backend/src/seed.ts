import mongoose from 'mongoose';
import { connectToDatabase, mongoUri } from './database';
import { Activity, LeaderboardEntry, Team, User, Workout } from './models';

export const seedDescription = 'OctoFit Tracker test data seed for users, teams, activities, leaderboard, and workouts.';

const users = [
  { name: 'Mona Octocat', email: 'mona@example.com', role: 'captain' },
  { name: 'Hubert Runner', email: 'hubert@example.com', role: 'member' },
  { name: 'Avery Lifter', email: 'avery@example.com', role: 'member' },
];

const teams = [
  { name: 'Octo Sprinters', description: 'A test team focused on cardio activities.' },
  { name: 'Merge Flex', description: 'A test team focused on strength training.' },
];

const activities = [
  { userEmail: 'mona@example.com', type: 'run', durationMinutes: 35, caloriesBurned: 320 },
  { userEmail: 'hubert@example.com', type: 'cycle', durationMinutes: 45, caloriesBurned: 410 },
  { userEmail: 'avery@example.com', type: 'strength', durationMinutes: 50, caloriesBurned: 280 },
];

const leaderboard = [
  { userEmail: 'hubert@example.com', score: 940, rank: 1 },
  { userEmail: 'mona@example.com', score: 875, rank: 2 },
  { userEmail: 'avery@example.com', score: 820, rank: 3 },
];

const workouts = [
  {
    title: 'Starter Cardio Loop',
    description: 'Test workout suggestion for building an aerobic base.',
    difficulty: 'beginner',
    durationMinutes: 25,
  },
  {
    title: 'Strength Builder Circuit',
    description: 'Test workout suggestion for balanced full-body strength.',
    difficulty: 'intermediate',
    durationMinutes: 40,
  },
];

const seedDatabase = async () => {
  console.log(seedDescription);
  await connectToDatabase();
  console.log(`MongoDB connected: ${mongoUri}`);

  await Promise.all([
    User.deleteMany({}),
    Team.deleteMany({}),
    Activity.deleteMany({}),
    LeaderboardEntry.deleteMany({}),
    Workout.deleteMany({}),
  ]);

  await Promise.all([
    User.insertMany(users),
    Team.insertMany(teams),
    Activity.insertMany(activities),
    LeaderboardEntry.insertMany(leaderboard),
    Workout.insertMany(workouts),
  ]);

  console.log('OctoFit Tracker test data seeded successfully.');
};

seedDatabase()
  .catch((error: unknown) => {
    console.error('Failed to seed OctoFit Tracker test data', error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await mongoose.disconnect();
  });
