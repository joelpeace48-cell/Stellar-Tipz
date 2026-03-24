//! Contract event definitions for the Tipz contract.
//!
//! All events are published via `env.events().publish()`.
//!
//! Events:
//! - ProfileRegistered(address, username)
//! - ProfileUpdated(address)
//! - TipSent(from, to, amount)
//! - TipsWithdrawn(address, amount, fee)
//! - CreditScoreUpdated(address, old_score, new_score)
//! - XMetricsBatchSkipped(creator) — batch update skipped unregistered address
//! - AdminChanged(old_admin, new_admin)
//! - FeeUpdated(old_fee, new_fee)

// TODO: Implement remaining event emission helpers in issue #6

use soroban_sdk::{symbol_short, Address, Env, String};

/// Emit a `ProfileRegistered` event containing the creator's address and username.
pub fn emit_profile_registered(env: &Env, address: &Address, username: &String) {
    env.events().publish(
        (symbol_short!("profile"), symbol_short!("register")),
        (address.clone(), username.clone()),
    );
}

pub fn emit_tip_sent(env: &Env, from: &Address, to: &Address, amount: i128) {
    env.events().publish(
        (symbol_short!("tip"), symbol_short!("sent")),
        (from, to, amount),
    );
}

pub fn emit_credit_score_updated(env: &Env, address: &Address, old_score: u32, new_score: u32) {
    env.events().publish(
        (symbol_short!("credit"), symbol_short!("updated")),
        (address.clone(), old_score, new_score),
    );
}

/// Emitted when a batch X metrics update skips a creator who is not registered.
pub fn emit_x_metrics_batch_skipped(env: &Env, creator: &Address) {
    env.events().publish(
        (symbol_short!("xbatch"), symbol_short!("skipped")),
        creator.clone(),
    );
}
