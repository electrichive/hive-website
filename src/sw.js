/* eslint-disable no-undef */

import { registerRoute } from 'workbox-routing';
import {
    NetworkFirst,
    StaleWhileRevalidate,
    CacheFirst,
} from 'workbox-strategies';
import { CacheableResponsePlugin } from 'workbox-cacheable-response';
import { ExpirationPlugin } from 'workbox-expiration';

const OnlyHTTP200Plugin = new CacheableResponsePlugin({ statuses: [200] });

// NetworkFirst 'pages' cache on HTML navigation
registerRoute(
    ({ request }) => request.mode === 'navigate',
    new NetworkFirst({
        cacheName: 'pages',
        plugins: [OnlyHTTP200Plugin],
    })
);

// StaleWhileRevalidate 'assets' cache (CSS, JS, webworker)
registerRoute(
    ({ request }) => request.destination in ['style', 'script', 'worker'],
    new StaleWhileRevalidate({
        cacheName: 'assets',
        plugins: [OnlyHTTP200Plugin],
    })
);

// CacheFirst 'images' cache
registerRoute(
    ({ request }) => request.destination === 'image',
    new CacheFirst({
        cacheName: 'images',
        plugins: [
            OnlyHTTP200Plugin,
            new ExpirationPlugin({
                maxEntries: 50,
                maxAgeSeconds: 60 * 60 * 24 * 30, // 30 Days
            }),
        ],
    })
);
