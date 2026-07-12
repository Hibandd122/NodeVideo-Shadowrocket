# NodeVideo++ Premium Unlock (Shadowrocket)

This repository contains a MITM script and configuration for Shadowrocket to bypass the premium entitlement checks in Node Video++. It spoofs the RevenueCat API responses to trick the local UnityStoreKit manager into granting a lifetime pro license.

## Files
- `nodevideo.js` — The HTTP response rewriter. Spoofs pro_permanent and pro_yearly entitlements.
- `NodeVideo_Shadowrocket.conf` — The module definition. Proxies revenuecat.com and intercepts the subscribers/receipts endpoints.

## Usage
1. Open Shadowrocket.
2. Go to **Config** → **Modules** → Add new module.
3. Copy the raw URL of `nodevideo.js` (e.g. `https://raw.githubusercontent.com/your-username/your-repo/main/Shadowrocket-NodeVideo/nodevideo.js`) and use it as the script-path in the config.
4. Ensure **HTTPS Decryption** is enabled in Shadowrocket settings and the root certificate is trusted.

## Note
This completely replaces the need for an injected ipacrack_ioscodevn.dylib via memory hooking. You can run the original, unpatched binary without jailbreak requirements.
