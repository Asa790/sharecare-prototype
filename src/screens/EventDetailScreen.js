import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, FONTS } from '../constants/theme';

export default function EventDetailScreen({ route, navigation }) {
  const { event, type = 'donasi' } = route.params || {};

  if (!event) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>Data kegiatan tidak ditemukan.</Text>
          <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
            <Text style={styles.backBtnText}>Kembali</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  const isDonasi = type === 'donasi';
  const progressRatio = isDonasi
    ? event.progress || 55
    : Math.round(((event.currentParticipants || 50) / (event.maxParticipants || 100)) * 100);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.primary} />
      
      {/* Top Navigation Bar with Back Button */}
      <View style={styles.topBar}>
        <TouchableOpacity
          style={styles.backIconButton}
          onPress={() => navigation.goBack()}
          activeOpacity={0.7}
        >
          <Ionicons name="arrow-back" size={24} color={COLORS.textDark} />
        </TouchableOpacity>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Event Header Photo */}
        <View style={styles.imageContainer}>
          <Image source={{ uri: event.imageUrl }} style={styles.headerImage} resizeMode="cover" />
        </View>

        {/* Title */}
        <Text style={styles.eventTitle}>{event.title}</Text>

        {/* Status / Metric Bar */}
        <View style={styles.metricsRow}>
          <View style={styles.progressTrack}>
            <View style={[styles.progressBar, { width: `${progressRatio}%` }]} />
            <Text style={styles.progressPercentText}>
              {isDonasi ? `${progressRatio}%` : `${event.currentParticipants}/${event.maxParticipants}`}
            </Text>
          </View>

          <TouchableOpacity style={styles.actionBadgeBtn} activeOpacity={0.8}>
            <Text style={styles.actionBadgeText}>{isDonasi ? 'Donasi' : 'Daftar'}</Text>
          </TouchableOpacity>
        </View>

        {/* Section: Deskripsi */}
        <View style={styles.infoSection}>
          <Text style={styles.sectionHeader}>Deskripsi</Text>
          <Text style={styles.descriptionText}>{event.description}</Text>
        </View>

        {/* Section: Lokasi */}
        <View style={styles.infoSection}>
          <Text style={styles.sectionHeader}>Lokasi</Text>
          <Text style={styles.bodyText}>{event.location}</Text>
        </View>

        {/* Section: Kontak & Info Penyelenggara */}
        <View style={styles.infoSection}>
          <Text style={styles.sectionHeader}>Kontak & Info Penyelenggara</Text>
          <Text style={styles.bodyText}>Email: {event.contactEmail || 'bersama.kitabisa@gmail.com'}</Text>
          <Text style={styles.bodyText}>No. Telp: {event.contactPhone || '809876543'}</Text>
          {event.website && <Text style={styles.bodyText}>Web Site: {event.website}</Text>}
        </View>

        {/* Report / Flag Link */}
        <TouchableOpacity style={styles.reportRow} activeOpacity={0.7}>
          <Text style={styles.reportText}>Apakah acara ini mencurigakan?</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  topBar: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  backIconButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  imageContainer: {
    width: '100%',
    height: 220,
    borderRadius: 20,
    overflow: 'hidden',
    marginBottom: 16,
    backgroundColor: COLORS.lightGray,
  },
  headerImage: {
    width: '100%',
    height: '100%',
  },
  eventTitle: {
    fontFamily: FONTS.bold,
    fontSize: 18,
    color: COLORS.textDark,
    marginBottom: 16,
    lineHeight: 24,
  },
  metricsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 24,
    gap: 12,
  },
  progressTrack: {
    flex: 1,
    height: 38,
    borderRadius: 19,
    borderWidth: 1.5,
    borderColor: '#9E9E9C',
    position: 'relative',
    justifyContent: 'center',
    backgroundColor: COLORS.white,
    overflow: 'hidden',
  },
  progressBar: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    backgroundColor: COLORS.subAccent, // #79C1AC Teal from Figma
    borderRadius: 17,
  },
  progressPercentText: {
    position: 'absolute',
    right: 18,
    fontFamily: FONTS.semiBold,
    fontSize: 13,
    color: COLORS.textDark,
  },
  actionBadgeBtn: {
    backgroundColor: COLORS.subAccent,
    paddingHorizontal: 22,
    paddingVertical: 10,
    borderRadius: 20,
  },
  actionBadgeText: {
    fontFamily: FONTS.semiBold,
    fontSize: 13,
    color: COLORS.white,
  },
  infoSection: {
    marginBottom: 20,
  },
  sectionHeader: {
    fontFamily: FONTS.bold,
    fontSize: 15,
    color: COLORS.textDark,
    marginBottom: 8,
  },
  descriptionText: {
    fontFamily: FONTS.regular,
    fontSize: 13,
    color: COLORS.textDark,
    lineHeight: 21,
  },
  bodyText: {
    fontFamily: FONTS.regular,
    fontSize: 13,
    color: COLORS.textDark,
    lineHeight: 20,
  },
  reportRow: {
    marginTop: 10,
    paddingVertical: 12,
  },
  reportText: {
    fontFamily: FONTS.regular,
    fontSize: 12,
    color: COLORS.textMuted,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  emptyText: {
    fontFamily: FONTS.medium,
    fontSize: 14,
    color: COLORS.textMuted,
    marginBottom: 16,
  },
  backBtn: {
    backgroundColor: COLORS.accent,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 12,
  },
  backBtnText: {
    fontFamily: FONTS.medium,
    color: COLORS.white,
  },
});

