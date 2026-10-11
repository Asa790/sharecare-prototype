import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, FONTS } from '../constants/theme';

export default function HomeHeader({ onSearchPress, onNotificationPress }) {
  return (
    <View style={styles.container}>
      {/* Top Bar with Brand & Actions */}
      <View style={styles.topRow}>
        <View style={styles.brandContainer}>
          <View style={styles.logoBadge}>
            <Ionicons name="heart" size={20} color={COLORS.accent} />
          </View>
          <View>
            <Text style={styles.brandTitle}>
              Share<Text style={styles.brandAccent}>Care</Text>
            </Text>
            <Text style={styles.brandSubtitle}>Platform Donasi & Relawan</Text>
          </View>
        </View>

        <View style={styles.actionIcons}>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={onNotificationPress}
            activeOpacity={0.7}
          >
            <Ionicons name="notifications-outline" size={22} color={COLORS.textDark} />
            <View style={styles.unreadDot} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Mock Search Bar */}
      <TouchableOpacity
        style={styles.searchBar}
        onPress={onSearchPress}
        activeOpacity={0.9}
      >
        <Ionicons name="search-outline" size={20} color={COLORS.textMuted} style={styles.searchIcon} />
        <TextInput
          placeholder="Cari donasi atau kegiatan volunteer..."
          placeholderTextColor={COLORS.textMuted}
          style={styles.searchInput}
          editable={false}
          pointerEvents="none"
        />
        <View style={styles.filterPill}>
          <Ionicons name="options-outline" size={16} color={COLORS.textDark} />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 16,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  brandContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  logoBadge: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: '#FFF2EB',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1.5,
    borderColor: COLORS.accent,
  },
  brandTitle: {
    fontFamily: FONTS.bold,
    fontSize: 22,
    color: COLORS.textDark,
    letterSpacing: -0.5,
  },
  brandAccent: {
    color: COLORS.accent,
  },
  brandSubtitle: {
    fontFamily: FONTS.regular,
    fontSize: 11,
    color: COLORS.textMuted,
    marginTop: -2,
  },
  actionIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: COLORS.border,
    position: 'relative',
  },
  unreadDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: COLORS.accent,
    position: 'absolute',
    top: 9,
    right: 9,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderRadius: 16,
    paddingHorizontal: 14,
    height: 48,
    borderWidth: 1,
    borderColor: COLORS.border,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 6,
    elevation: 2,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontFamily: FONTS.regular,
    fontSize: 13,
    color: COLORS.textDark,
  },
  filterPill: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: COLORS.secondary,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

