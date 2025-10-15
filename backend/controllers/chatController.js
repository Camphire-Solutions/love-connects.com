const { threads, messages } = require('../utils/data');

// Get threads
const getThreads = (req, res) => {
  const userThreads = threads.filter(t => t.participants.includes(req.user.id));
  res.json(userThreads);
};

// Create thread
const createThread = (req, res) => {
  const { participantId } = req.body;
  let thread = threads.find(t => t.participants.includes(req.user.id) && t.participants.includes(participantId));
  if (!thread) {
    thread = { id: threads.length + 1, participants: [req.user.id, participantId], lastMessageAt: null };
    threads.push(thread);
  }
  res.json(thread);
};

// Send message
const sendMessage = (req, res) => {
  const { threadId, text } = req.body;
  const thread = threads.find(t => t.id === Number(threadId));
  if (!thread) return res.status(400).json({ message: 'Thread not found' });

  const message = { id: messages.length + 1, threadId: thread.id, fromUserId: req.user.id, text, createdAt: new Date() };
  messages.push(message);
  thread.lastMessageAt = new Date();

  res.json(message);
};

// Get messages
const getMessages = (req, res) => {
  const threadId = Number(req.params.threadId);
  const threadMessages = messages.filter(m => m.threadId === threadId);
  res.json(threadMessages);
};

module.exports = { getThreads, createThread, sendMessage, getMessages };
