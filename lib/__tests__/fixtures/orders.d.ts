declare const _exports: ({
    "created_date": string;
    "order_hash": string;
    "metadata": {
        "asset": {
            "id": string;
            "address": string;
        };
        "schema": string;
    };
    "exchange": string;
    "maker": {
        "user": {
            "username": string;
        };
        "profile_img_url": string;
        "address": string;
        "config": string;
    };
    "taker": {
        "user": null;
        "profile_img_url": string;
        "address": string;
        "config": string;
    };
    "current_price": string;
    "current_bounty": string;
    "maker_relayer_fee": string;
    "taker_relayer_fee": string;
    "maker_protocol_fee": string;
    "taker_protocol_fee": string;
    "maker_referrer_fee": string;
    "fee_recipient": {
        "user": null;
        "profile_img_url": string;
        "address": string;
        "config": string;
    };
    "fee_method": number;
    "side": number;
    "sale_kind": number;
    "target": string;
    "how_to_call": number;
    "calldata": string;
    "replacement_pattern": string;
    "static_target": string;
    "static_extradata": string;
    "payment_token": string;
    "payment_token_contract": {
        "address": string;
        "image_url": null;
        "name": string;
        "symbol": string;
        "decimals": number;
        "eth_price": string;
    };
    "base_price": string;
    "extra": string;
    "listing_time": number;
    "expiration_time": number;
    "salt": string;
    "v": number;
    "r": string;
    "s": string;
    "cancelled": boolean;
    "finalized": boolean;
    "marked_invalid": boolean;
    "prefixed_hash": string;
} | {
    "exchange": string;
    "maker": {
        "address": string;
        "user"?: undefined;
        "profile_img_url"?: undefined;
        "config"?: undefined;
    };
    "taker": {
        "address": string;
        "user"?: undefined;
        "profile_img_url"?: undefined;
        "config"?: undefined;
    };
    "maker_relayer_fee": string;
    "taker_relayer_fee": string;
    "maker_protocol_fee": string;
    "taker_protocol_fee": string;
    "fee_recipient": {
        "address": string;
        "user"?: undefined;
        "profile_img_url"?: undefined;
        "config"?: undefined;
    };
    "fee_method": string;
    "side": string;
    "sale_kind": string;
    "target": string;
    "how_to_call": string;
    "calldata": string;
    "replacement_pattern": string;
    "static_target": string;
    "static_extradata": string;
    "payment_token": string;
    "base_price": string;
    "extra": string;
    "listing_time": string;
    "expiration_time": string;
    "salt": string;
    "order_hash": string;
    "created_date"?: undefined;
    "metadata"?: undefined;
    "current_price"?: undefined;
    "current_bounty"?: undefined;
    "maker_referrer_fee"?: undefined;
    "payment_token_contract"?: undefined;
    "v"?: undefined;
    "r"?: undefined;
    "s"?: undefined;
    "cancelled"?: undefined;
    "finalized"?: undefined;
    "marked_invalid"?: undefined;
    "prefixed_hash"?: undefined;
} | {
    "exchange": string;
    "maker": {
        "address": string;
        "user"?: undefined;
        "profile_img_url"?: undefined;
        "config"?: undefined;
    };
    "taker": {
        "address": string;
        "user"?: undefined;
        "profile_img_url"?: undefined;
        "config"?: undefined;
    };
    "maker_relayer_fee": string;
    "taker_relayer_fee": string;
    "maker_protocol_fee": string;
    "taker_protocol_fee": string;
    "fee_method": string;
    "fee_recipient": {
        "address": string;
        "user"?: undefined;
        "profile_img_url"?: undefined;
        "config"?: undefined;
    };
    "side": string;
    "sale_kind": string;
    "target": string;
    "how_to_call": string;
    "calldata": string;
    "replacement_pattern": string;
    "static_target": string;
    "static_extradata": string;
    "payment_token": string;
    "base_price": string;
    "extra": string;
    "listing_time": string;
    "expiration_time": string;
    "salt": string;
    "order_hash": string;
    "metadata": {
        "asset": {
            "id": number;
            "address": string;
        };
        "schema": string;
    };
    "created_date"?: undefined;
    "current_price"?: undefined;
    "current_bounty"?: undefined;
    "maker_referrer_fee"?: undefined;
    "payment_token_contract"?: undefined;
    "v"?: undefined;
    "r"?: undefined;
    "s"?: undefined;
    "cancelled"?: undefined;
    "finalized"?: undefined;
    "marked_invalid"?: undefined;
    "prefixed_hash"?: undefined;
} | {
    "order_hash": string;
    "metadata": {
        "asset": {
            "id": string;
            "address": string;
        };
        "schema": string;
    };
    "exchange": string;
    "maker": {
        "user": number;
        "profile_img_url": string;
        "address": string;
        "config": string;
    };
    "taker": {
        "user": number;
        "profile_img_url": string;
        "address": string;
        "config": string;
    };
    "current_price": string;
    "maker_relayer_fee": string;
    "taker_relayer_fee": string;
    "maker_protocol_fee": string;
    "taker_protocol_fee": string;
    "fee_recipient": {
        "user": null;
        "profile_img_url": string;
        "address": string;
        "config": string;
    };
    "fee_method": number;
    "side": number;
    "sale_kind": number;
    "target": string;
    "how_to_call": number;
    "calldata": string;
    "replacement_pattern": string;
    "static_target": string;
    "static_extradata": string;
    "payment_token": string;
    "base_price": string;
    "extra": string;
    "listing_time": number;
    "expiration_time": number;
    "salt": string;
    "v": number;
    "r": string;
    "s": string;
    "cancelled": boolean;
    "finalized": boolean;
    "marked_invalid": boolean;
    "prefixed_hash": string;
    "created_date"?: undefined;
    "current_bounty"?: undefined;
    "maker_referrer_fee"?: undefined;
    "payment_token_contract"?: undefined;
} | {
    "order_hash": string;
    "metadata": {
        "asset": {
            "id": string;
            "address": string;
        };
        "schema": string;
    };
    "exchange": string;
    "maker": {
        "user": {
            "username": string;
        };
        "profile_img_url": string;
        "address": string;
        "config": string;
    };
    "taker": {
        "user": {
            "username": string;
        };
        "profile_img_url": string;
        "address": string;
        "config": string;
    };
    "current_price": string;
    "maker_relayer_fee": string;
    "taker_relayer_fee": string;
    "maker_protocol_fee": string;
    "taker_protocol_fee": string;
    "fee_recipient": {
        "user": null;
        "profile_img_url": string;
        "address": string;
        "config": string;
    };
    "fee_method": number;
    "side": number;
    "sale_kind": number;
    "target": string;
    "how_to_call": number;
    "calldata": string;
    "replacement_pattern": string;
    "static_target": string;
    "static_extradata": string;
    "payment_token": string;
    "base_price": string;
    "extra": string;
    "listing_time": number;
    "expiration_time": number;
    "salt": string;
    "v": number;
    "r": string;
    "s": string;
    "cancelled": boolean;
    "finalized": boolean;
    "marked_invalid": boolean;
    "prefixed_hash": null;
    "created_date"?: undefined;
    "current_bounty"?: undefined;
    "maker_referrer_fee"?: undefined;
    "payment_token_contract"?: undefined;
})[];
export = _exports;
