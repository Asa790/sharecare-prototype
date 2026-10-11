import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, FONTS } from '../constants/theme';

export default function VolunteerCard({ item, onPress }) {
  const progressPercent = Math.round((item.currentParticipants / item.maxParticipants) * 100);

  return (
    <TouchableOpacity style={styles.card} activeOpacity={0.85} onPress={onPress}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: item.imageUrl }} style={styles.image} resizeMode="cover" />
        <View style={styles.dateBadge}>
          <Ionicons name="calendar-outline" size={11} color="#FFFFFF" style={{ marginRight: 4 }} />
          <Text style={styles.dateBadgeText}>{item.date}</Text>
        </View>
      </View>

      <View style={styles.body}>
        <Text style={styles.title} numberOfLines={2}>
          {item.title}
        </Text>
        <Text style={styles.organization} numberOfLines={1}>
          {item.organization}
        </Text>

        <View style={styles.locationRow}>
          <Ionicons name="location-outline" size={13} color={COLORS.accent} />
          <Text style={styles.locationText} numberOfLines={1}>
            {item.location}
          </Text>
        </View>

        {/* Participant Progress Bar */}
        <View style={styles.progressContainer}>
          <View style={styles.progressTrack}>
            <View style={[styles.progressBar, { width: `${progressPercent}%` }]} />
          </View>
          <View style={styles.progressDetails}>
            <Text style={styles.participantsRatio}>
              {item.currentParticipants}/{item.maxParticipants} Relawan
            </Text>
            <TouchableOpacity
              style={styles.registerButton}
              onPress={onPress}
              activeOpacity={0.7}
            >
              <Text style={styles.registerButtonText}>Daftar</Text>
            </TouchableOpacity>
          </View>
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
  dateBadge: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: 'rgba(7, 6, 2, 0.75)',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  dateBadgeText: {
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
    marginBottom: 6,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginBottom: 10,
  },
  locationText: {
    fontFamily: FONTS.regular,
    fontSize: 11,
    color: COLORS.textDark,
    flex: 1,
  },
  progressContainer: {
    marginTop: 2,
  },
  progressTrack: {
    height: 7,
    backgroundColor: COLORS.progressBg,
    borderRadius: 4,
    overflow: 'hidden',
    marginBottom: 8,
  },
  progressBar: {
    height: '100%',
    backgroundColor: COLORS.accent, // Warm Orange for volunteer action
    borderRadius: 4,
  },
  progressDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  participantsRatio: {
    fontFamily: FONTS.medium,
    fontSize: 11,
    color: COLORS.textDark,
  },
  registerButton: {
    backgroundColor: COLORS.subAccent,
    paddingHorizontal: 14,
    paddingVertical: 5,
    borderRadius: 10,
  },
  registerButtonText: {
    fontFamily: FONTS.medium,
    fontSize: 11,
    color: COLORS.white,
  },
});

