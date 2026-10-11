import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, FONTS } from '../constants/theme';

export default function DonationCard({ item, onPress }) {
  // Format Indonesian Rupiah
  const formatCurrency = (val) => {
    return 'Rp ' + val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  };

  return (
    <TouchableOpacity style={styles.card} activeOpacity={0.85} onPress={onPress}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: item.imageUrl }} style={styles.image} resizeMode="cover" />
        <View style={styles.categoryBadge}>
          <Text style={styles.categoryBadgeText}>{item.category}</Text>
        </View>
      </View>

      <View style={styles.body}>
        <Text style={styles.title} numberOfLines={2}>
          {item.title}
        </Text>
        <Text style={styles.organization} numberOfLines={1}>
          {item.organization}
        </Text>

        {/* Progress Bar */}
        <View style={styles.progressContainer}>
          <View style={styles.progressTrack}>
            <View style={[styles.progressBar, { width: `${item.progress}%` }]} />
          </View>
          <View style={styles.progressDetails}>
            <Text style={styles.progressText}>{item.progress}% Tercapai</Text>
            <Text style={styles.daysText}>{item.daysLeft} hari lagi</Text>
          </View>
        </View>

        {/* Donation Figures */}
        <View style={styles.footer}>
          <View>
            <Text style={styles.collectedLabel}>Terkumpul</Text>
            <Text style={styles.collectedAmount}>{formatCurrency(item.collected)}</Text>
          </View>
          <TouchableOpacity
            style={styles.donateButton}
            onPress={onPress}
            activeOpacity={0.7}
          >
            <Text style={styles.donateButtonText}>Donasi</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 250,
    backgroundColor: COLORS.white,
    borderRadius: 18,
    marginRight: 16,
    borderWidth: 1,
    borderColor: COLORS.border,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
    overflow: 'hidden',
  },
  imageContainer: {
    width: '100%',
    height: 125,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  categoryBadge: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: 'rgba(7, 6, 2, 0.7)',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 8,
  },
  categoryBadgeText: {
    fontFamily: FONTS.medium,
    fontSize: 10,
    color: '#FFFFFF',
  },
  body: {
    padding: 12,
  },
  title: {
    fontFamily: FONTS.semiBold,
    fontSize: 14,
    color: COLORS.textDark,
    lineHeight: 18,
    marginBottom: 4,
    minHeight: 36,
  },
  organization: {
    fontFamily: FONTS.regular,
    fontSize: 11,
    color: COLORS.textMuted,
    marginBottom: 10,
  },
  progressContainer: {
    marginBottom: 10,
  },
  progressTrack: {
    height: 7,
    backgroundColor: COLORS.progressBg,
    borderRadius: 4,
    overflow: 'hidden',
    marginBottom: 5,
  },
  progressBar: {
    height: '100%',
    backgroundColor: COLORS.subAccent, // Muted teal green accent matching Figma design
    borderRadius: 4,
  },
  progressDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  progressText: {
    fontFamily: FONTS.medium,
    fontSize: 10,
    color: COLORS.textDark,
  },
  daysText: {
    fontFamily: FONTS.regular,
    fontSize: 10,
    color: COLORS.textMuted,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 8,
    borderTopWidth: 1,
    borderTopColor: COLORS.lightGray,
  },
  collectedLabel: {
    fontFamily: FONTS.regular,
    fontSize: 9,
    color: COLORS.textMuted,
  },
  collectedAmount: {
    fontFamily: FONTS.bold,
    fontSize: 12,
    color: COLORS.accent,
  },
  donateButton: {
    backgroundColor: COLORS.subAccent,
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 10,
  },
  donateButtonText: {
    fontFamily: FONTS.medium,
    fontSize: 11,
    color: COLORS.white,
  },
});

