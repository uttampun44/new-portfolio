export default async function handler(req:any , res:any) {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ message: "Message is required" });
  }

  // send notification to all users
  res.status(200).json({ message: "Notification sent" });
}