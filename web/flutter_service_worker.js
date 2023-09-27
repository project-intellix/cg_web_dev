'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"manifest.json": "4edc2953afb64ba03a54b49552105fa2",
"version.json": "f902c2c35a34c05278769cc1b3f4059f",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"canvaskit/chromium/canvaskit.wasm": "1165572f59d51e963a5bf9bdda61e39b",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/canvaskit.wasm": "19d8b35640d13140fe4e6f3b8d450f04",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"main.dart.js": "8b1b03d6b444914fa8ac8c3d5e3ebf95",
"assets/packages/flutter_iconpicker_plus/fonts/LineAwesome.ttf": "bcc78af7963d22efd760444145073cd3",
"assets/packages/flutter_iconpicker_plus/fonts/fa-brands-400.ttf": "4e20cb87b0d43808c49449ffd69b1a74",
"assets/packages/flutter_iconpicker_plus/fonts/fa-solid-900.ttf": "26f5af2d93473531f82ef5060f9c6d45",
"assets/packages/flutter_iconpicker_plus/fonts/fa-regular-400.ttf": "1f7cb220b3f5309130bd6d9ad87e0fc0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "5ac99533bd9dc46227434b4853c3e532",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "1e17b1ec3152f29bf783bd42db8b6023",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "093d2cde7075fcffb24ab215668d0da2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/AssetManifest.json": "7091892469817d8994d75ada39095db3",
"assets/AssetManifest.bin": "1128657eef4d367c00b24f59e4b8fea9",
"assets/FontManifest.json": "e1044d6203f63216088caa35ff937713",
"assets/assets/images/climber.jpg": "78b81f1a328664783e2ea5d24a2aad46",
"assets/assets/images/city.jpg": "bd611eba688223164a86b442e31a96b7",
"assets/assets/images/tree.jpg": "1c659f04deaca0c5c920459d2f57ebe5",
"assets/assets/images/butterfly.jpg": "0a0dfbb135bbfee5f590a1b324f269a6",
"assets/assets/images/lighting.jpg": "c9cb83adbff4aa6c70003048deaaa626",
"assets/assets/images/coffee.jpg": "4857957b442831822629fb50996031b6",
"assets/assets/images/water.jpg": "596b3f99395d75e3dd5a2a1598e6d19a",
"assets/assets/images/universe.jpg": "0eb4bed46dd081fb1dc24d5b99528518",
"assets/assets/images/parrot.jpg": "f9152e7ca9a09ab975e0ae17e61b1245",
"assets/assets/images/fish.jpg": "eba8089aabd6506169d435dd6297291a",
"assets/assets/images/duck.jpg": "8b4aaa3119d191abd215d51b7df2a826",
"assets/assets/images/dahlias.jpg": "c6e12a9042a38935b62bbce166d6feaf",
"assets/assets/images/flowers.jpg": "3a3cd2b8d1aa30278916fa90c2a8c00a",
"assets/assets/images/boat.jpg": "a493f03c7c82e85bbf81553a15d9fb6c",
"assets/assets/images/ruin.jpg": "59cf364cfaf45cff25afe5c312a33c81",
"assets/assets/images/flower.jpg": "7065a89c9bd0167510294d30e5cf5d4c",
"assets/assets/images/buildings.jpg": "d0239a1a5faf71ed47c6e1a3abd31dca",
"assets/assets/images/plant.jpg": "c71c441980f1916719ad4d68109e2ed1",
"assets/assets/images/night.jpg": "ceb990194df179519eda8a812dae6d85",
"assets/assets/images/fire.jpg": "6bea31f90add103cb4363fa02727512f",
"assets/assets/images/floral.jpg": "3475eb34a3af7ad56bde359ea3b91936",
"assets/assets/images/sources.txt": "fa2e0231f4e797e7135a51fa55e5b338",
"assets/assets/images/moon.jpg": "190d0fdc8e0d69af67e68463c0c24855",
"assets/assets/images/cat.jpg": "047e50f6d1b7492fa08efdb9b5f776dd",
"assets/assets/images/lighthouse.jpg": "5e361fa1f380c737c2744eb80c7db676",
"assets/assets/images/turtle.jpg": "7696ed8882eeb55becf9f50b07e4a7e2",
"assets/assets/images/camera.jpg": "8801878f5cc05c6e823bf8183d72b599",
"assets/assets/images/living.jpg": "b71dff313691d6186dc52814bdfd1140",
"assets/assets/fonts/JosefinSans-Regular.ttf": "effd9508e574fd2ab338bbd81f784f3e",
"assets/assets/fonts/DMSerifDisplay-Regular.ttf": "25b39681f8cf94ad3cbfc6d25d9c0c4e",
"assets/assets/fonts/GreatVibes-Regular.ttf": "4bd0ed00ca8deac6c6706a092d9afd13",
"assets/assets/fonts/Comfortaa-Regular.ttf": "53f695dbfc6f703f86ed88bddde527b6",
"assets/assets/fonts/IndieFlower-Regular.ttf": "8a33aae7305b37411d775d6617e80aca",
"assets/assets/fonts/AmaticSC-Regular.ttf": "04b6b0803b089211561d2fd5e5d9af80",
"assets/assets/fonts/ShadowsIntoLight-Regular.ttf": "e8f47a72dddf523096a21b4a93f56f89",
"assets/assets/fonts/ChakraPetch-Regular.ttf": "12c7b5f81aa7ab4781673a2a4cf69b5c",
"assets/assets/fonts/Anton-Regular.ttf": "055c4df4e2f8c7a4d4675cdd8fa68da0",
"assets/assets/fonts/PlayfairDisplay-Regular.ttf": "74011d563a281b7289399d618bfb606f",
"assets/assets/fonts/Satisfy-Regular.ttf": "aaa5880c7a5f7e479e31a4412452d8a9",
"assets/assets/fonts/AbrilFatface-Regular.ttf": "738419c3ec95241a3d56e4654555005e",
"assets/assets/fonts/Lobster-Regular.ttf": "c3191f3b933ae0bd46335e178744326e",
"assets/assets/fonts/Dosis-Regular.ttf": "09e98c03373f35acab47c6c1f45ffaec",
"assets/assets/fonts/Teko-Regular.ttf": "8f87709aa788b839c587e8a6566f960d",
"assets/assets/fonts/RedHatDisplay-Regular.ttf": "f913c823bff6d018e14f320bfb31ffa4",
"assets/assets/fonts/BebasNeue-Regular.ttf": "b2b293064f557c41411aac04d6f6710d",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "15a01039c44fd6b6296d81cab934d017",
"index.html": "4574e11a140df9a28b07ac11585fd99a",
"/": "4574e11a140df9a28b07ac11585fd99a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["/",
"main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
