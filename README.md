# NodeVideo++ Premium Unlock (Shadowrocket)

This repository contains a MITM script and configuration for Shadowrocket to bypass the premium entitlement checks in Node Video++. It spoofs the RevenueCat API responses to trick the local UnityStoreKit manager into granting a lifetime pro license.

## Files
- 
odevideo.js — The HTTP response rewriter. Spoofs pro_permanent and pro_yearly entitlements.
- NodeVideo_Shadowrocket.conf — The module definition. Proxies evenuecat.com and intercepts the subscribers / eceipts endpoints.

## Usage
1. Open Shadowrocket.
2. Go to **Config** -> **Modules** -> Add new module.
3. Paste the contents of NodeVideo_Shadowrocket.conf, but replace the script-path=nodevideo.js with the raw GitHub URL to your 
odevideo.js file.
4. Ensure **HTTPS Decryption** is enabled in Shadowrocket settings and the root certificate is trusted.

## Note
This completely replaces the need for an injected ipacrack_ioscodevn.dylib via memory hooking. You can run the original, unpatched binary without jailbreak requirements.
