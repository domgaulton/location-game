'use server';

import webpush from 'web-push';

webpush.setVapidDetails(
  'mailto:domgaulton@gmail.com',
  process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY!,
  process.env.VAPID_PRIVATE_KEY!
);

let subscription: PushSubscription | null = null;

export async function subscribeUser(sub: PushSubscription) {
  subscription = sub;
  // In a production environment, you would want to store the subscription in a database
  // For example: await db.subscriptions.create({ data: sub })
  return 'success';
}

export async function unsubscribeUser() {
  subscription = null;
  // In a production environment, you would want to remove the subscription from the database
  // For example: await db.subscriptions.delete({ where: { ... } })
  return 'success';
}

export async function sendNotification(message: string) {
  console.log('Sending notification:', message);

  if (!subscription) {
    throw new Error('No subscription available');
  }

  console.log({ subscription });

  try {
    const x = await webpush.sendNotification(
      // @ts-expect-error - drunkaf
      subscription,
      JSON.stringify({
        title: 'Test Notification',
        body: message,
        icon: '/icon.png',
      })
    );
    console.log({ x });
    return 'true';
  } catch (error) {
    console.error('Error sending push notification:', error);
    return 'Failed to send notification';
  }
}
