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
//! - AdminChanged(old_admin, new_admin)
//! - FeeUpdated(old_fee, new_fee)

use soroban_sdk::{symbol_short, Address, Env, String};

/// Emit a `ProfileRegistered` event containing the creator's address and username.
pub fn emit_profile_registered(env: &Env, address: &Address, username: &String) {
    env.events().publish(
        (symbol_short!("profile"), symbol_short!("register")),
        (address.clone(), username.clone()),
    );
}

// TODO: Implement remaining event emission helpers in issue #6
//
// pub fn emit_profile_updated(env: &Env, address: &Address) { ... }
//
// pub fn emit_tip_sent(env: &Env, from: &Address, to: &Address, amount: i128) {
//     env.events().publish(
//         (symbol_short!("tip"), symbol_short!("sent")),
//         (from, to, amount),
//     );
// }
//
// pub fn emit_tips_withdrawn(env: &Env, address: &Address, amount: i128, fee: i128) { ... }
//
// pub fn emit_credit_score_updated(env: &Env, address: &Address, old: u32, new: u32) { ... }
//
// pub fn emit_admin_changed(env: &Env, old_admin: &Address, new_admin: &Address) { ... }
//
// pub fn emit_fee_updated(env: &Env, old_fee: u32, new_fee: u32) { ... }
