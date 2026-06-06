var body = \.body;
var obj = JSON.parse(body);

obj.subscriber.entitlements = {
  "pro_permanent": {
    "expires_date": "2099-01-01T00:00:00Z",
    "product_identifier": "com.shallwaystudio.nodevideo.pro_permanent",
    "purchase_date": "2023-01-01T00:00:00Z"
  },
  "pro_yearly": {
    "expires_date": "2099-01-01T00:00:00Z",
    "product_identifier": "com.shallwaystudio.nodevideo.pro_yearly",
    "purchase_date": "2023-01-01T00:00:00Z"
  }
};

obj.subscriber.subscriptions = {
  "com.shallwaystudio.nodevideo.pro_permanent": {
    "billing_issues_intent_at": null,
    "expires_date": "2099-01-01T00:00:00Z",
    "is_sandbox": false,
    "original_purchase_date": "2023-01-01T00:00:00Z",
    "period_type": "normal",
    "purchase_date": "2023-01-01T00:00:00Z",
    "store": "app_store",
    "unsubscribe_detected_at": null
  },
  "com.shallwaystudio.nodevideo.pro_yearly": {
    "billing_issues_intent_at": null,
    "expires_date": "2099-01-01T00:00:00Z",
    "is_sandbox": false,
    "original_purchase_date": "2023-01-01T00:00:00Z",
    "period_type": "normal",
    "purchase_date": "2023-01-01T00:00:00Z",
    "store": "app_store",
    "unsubscribe_detected_at": null
  }
};

\({body: JSON.stringify(obj)});
