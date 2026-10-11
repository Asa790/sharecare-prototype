import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, FONTS } from '../constants/theme';

const NOTIFICATIONS = [
  {
    id: 'n1',
    section: 'Hari ini',
    title: 'Volunteer Kerja Bhakti Alun-alun Kota Bekasi',
    time: '10 Mei, 2026 15:00',
    type: 'volunteer',
  },
  {
    id: 'n2',
    section: 'Hari ini',
    title: 'Donasi Panti Asuhan St. Andreas',
    time: '10 Mei, 2026 12:40',
    type: 'donasi',
  },
  {
    id: 'n3',
    section: 'Kemarin',
    title: 'Donor Darah di Puskesmas Kranji',
    time: '9 Mei, 2026 14:00',
    type: 'volunteer',
  },
  {
    id: 'n4',
    section: 'Kemarin',
    title: 'Volunteer Membersihkan Sungai Ciliwung',
    time: '9 Mei, 2026 09:40',
    type: 'volunteer',
  },
  {
    id: 'n5',
    section: '8 Mei, 2026',
    title: 'Donasi Banjir Aceh telah disalurkan',
    time: '8 Mei, 2026 18:00',
    type: 'donasi',
  },
];

export default function NotificationScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.primary} />
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Notifikasi</Text>
      </View>

      <FlatList
        data={NOTIFICATIONS}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <View style={styles.notifCard}>
            <View
              style={[
                styles.iconWrap,
                { backgroundColor: item.type === 'donasi' ? '#FFF2EB' : '#E8F5F1' },
              ]}
            >
              <Ionicons
                name={item.type === 'donasi' ? 'heart' : 'people'}
                size={20}
                color={item.type === 'donasi' ? COLORS.accent : COLORS.subAccent}
              />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.notifTitle}>{item.title}</Text>
              <Text style={styles.notifTime}>{item.time}</Text>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  headerTitle: {
    fontFamily: FONTS.bold,
    fontSize: 20,
    color: COLORS.textDark,
  },
  listContent: {
    padding: 20,
  },
  notifCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    padding: 14,
    borderRadius: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  iconWrap: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
  },
  notifTitle: {
    fontFamily: FONTS.medium,
    fontSize: 13,
    color: COLORS.textDark,
    marginBottom: 3,
  },
  notifTime: {
    fontFamily: FONTS.regular,
    fontSize: 11,
    color: COLORS.textMuted,
  },
});

