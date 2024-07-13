import { firestore, doc, setDoc, collection } from './firebaseConfig';

const createMockChallenge = async () => {
  const challengeRef = doc(collection(firestore, 'challenges'), 'mock_challenge');
  await setDoc(challengeRef, {
    title: 'Mock CTF Challenge',
    description: 'Solve this challenge to get the flag.',
    flag: 'hhs{MOCK_FLAG}',
  });
};

createMockChallenge().then(() => console.log('Mock challenge created')).catch(error => console.error('Error creating mock challenge:', error));