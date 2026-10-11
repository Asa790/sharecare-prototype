import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, FONTS } from '../constants/theme';

export default function ProfileScreen() {
  const menuItems = [
    { id: '1', title: 'Sertifikat Saya', subtitle: 'Klik disini untuk melihat sertifikat', icon: 'ribbon-outline' },
    { id: '2', title: 'Riwayat Donasi & Volunteer', subtitle: 'Aktivitas kebaikan yang telah diikuti', icon: 'time-outline' },
    { id: '3', title: 'Bantuan & Privasi', subtitle: 'Pusat bantuan & kebijakan akun', icon: 'shield-checkmark-outline' },
    { id: '4', title: 'Permohonan Menjadi Penyelenggara', subtitle: 'Daftar sebagai organisasi resmi', icon: 'business-outline' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.primary} />
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        
        {/* User Card */}
        <View style={styles.profileHeader}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=300&auto=format&fit=crop' }}
            style={styles.avatar}
          />
          <View style={styles.userInfo}>
            <View style={styles.nameRow}>
              <Text style={styles.userName}>John Doe</Text>
              <View style={styles.verifiedBadge}>
                <Ionicons name="checkmark-circle" size={16} color={COLORS.subAccent} />
              </View>
            </View>
            <Text style={styles.userEmail}>john.doe@gmail.com</Text>
            <Text style={styles.userRole}>Relawan Aktif</Text>
          </View>
        </View>

        {/* Total Points & Badges Card */}
        <View style={styles.statsCard}>
          <View style={styles.statRow}>
            <View>
              <Text style={styles.statLabel}>Total Poin Peduli</Text>
              <Text style={styles.statValue}>1,250 Poin</Text>
            </View>
            <View style={styles.badgePill}>
              <Ionicons name="trophy" size={16} color={COLORS.secondary} style={{ marginRight: 4 }} />
              <Text style={styles.badgeText}>Level 3: Sahabat Peduli</Text>
            </View>
          </View>
          <View style={styles.progressTrack}>
            <View style={[styles.progressBar, { width: '65%' }]} />
          </View>
          <Text style={styles.progressNote}>350 poin lagi menuju level berikutnya</Text>
        </View>

        {/* Dompet Saya (Digital Wallet) */}
        <View style={styles.walletCard}>
          <View>
            <Text style={styles.walletLabel}>Dompet Kebaikan</Text>
            <Text style={styles.walletBalance}>Rp 150.000</Text>
          </View>
          <TouchableOpacity style={styles.topUpButton}>
            <Ionicons name="add-circle-outline" size={16} color={COLORS.textDark} style={{ marginRight: 4 }} />
            <Text style={styles.topUpText}>Isi Saldo</Text>
          </TouchableOpacity>
        </View>

        {/* Profile Action Menus */}
        <View style={styles.menuSection}>
          {menuItems.map((item) => (
            <TouchableOpacity key={item.id} style={styles.menuItem} activeOpacity={0.7}>
              <View style={styles.menuIconWrap}>
                <Ionicons name={item.icon} size={20} color={COLORS.textDark} />
              </View>
              <View style={styles.menuTextWrap}>
                <Text style={styles.menuTitle}>{item.title}</Text>
                <Text style={styles.menuSubtitle}>{item.subtitle}</Text>
              </View>
              <Ionicons name="chevron-forward" size={18} color={COLORS.textMuted} />
            </TouchableOpacity>
          ))}
        </View>

        {/* Logout Button */}
        <TouchableOpacity style={styles.logoutButton}>
          <Ionicons name="log-out-outline" size={18} color={COLORS.danger} style={{ marginRight: 6 }} />
          <Text style={styles.logoutText}>Keluar dari akun</Text>
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
  scrollContent: {
    padding: 20,
    paddingBottom: 30,
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    padding: 16,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: COLORS.border,
    marginBottom: 16,
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    marginRight: 14,
    borderWidth: 2,
    borderColor: COLORS.secondary,
  },
  userInfo: {
    flex: 1,
  },
  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  userName: {
    fontFamily: FONTS.bold,
    fontSize: 17,
    color: COLORS.textDark,
  },
  verifiedBadge: {
    marginTop: 2,
  },
  userEmail: {
    fontFamily: FONTS.regular,
    fontSize: 12,
    color: COLORS.textMuted,
    marginTop: 2,
  },
  userRole: {
    fontFamily: FONTS.medium,
    fontSize: 11,
    color: COLORS.accent,
    marginTop: 2,
  },
  statsCard: {
    backgroundColor: COLORS.white,
    borderRadius: 20,
    padding: 16,
    borderWidth: 1,
    borderColor: COLORS.border,
    marginBottom: 14,
  },
  statRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  statLabel: {
    fontFamily: FONTS.regular,
    fontSize: 11,
    color: COLORS.textMuted,
  },
  statValue: {
    fontFamily: FONTS.bold,
    fontSize: 20,
    color: COLORS.textDark,
  },
  badgePill: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#070602',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 14,
  },
  badgeText: {
    fontFamily: FONTS.medium,
    fontSize: 11,
    color: '#FFFFFF',
  },
  progressTrack: {
    height: 8,
    backgroundColor: COLORS.progressBg,
    borderRadius: 4,
    overflow: 'hidden',
    marginBottom: 6,
  },
  progressBar: {
    height: '100%',
    backgroundColor: COLORS.secondary,
    borderRadius: 4,
  },
  progressNote: {
    fontFamily: FONTS.regular,
    fontSize: 10,
    color: COLORS.textMuted,
  },
  walletCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFBEA',
    borderRadius: 20,
    padding: 16,
    borderWidth: 1,
    borderColor: COLORS.secondary,
    marginBottom: 20,
  },
  walletLabel: {
    fontFamily: FONTS.regular,
    fontSize: 11,
    color: COLORS.textDark,
  },
  walletBalance: {
    fontFamily: FONTS.bold,
    fontSize: 18,
    color: COLORS.textDark,
    marginTop: 2,
  },
  topUpButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.secondary,
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 12,
  },
  topUpText: {
    fontFamily: FONTS.semiBold,
    fontSize: 12,
    color: COLORS.textDark,
  },
  menuSection: {
    backgroundColor: COLORS.white,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: COLORS.border,
    paddingHorizontal: 14,
    paddingVertical: 6,
    marginBottom: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.lightGray,
  },
  menuIconWrap: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: COLORS.lightGray,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  menuTextWrap: {
    flex: 1,
  },
  menuTitle: {
    fontFamily: FONTS.medium,
    fontSize: 13,
    color: COLORS.textDark,
  },
  menuSubtitle: {
    fontFamily: FONTS.regular,
    fontSize: 10,
    color: COLORS.textMuted,
    marginTop: 1,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
  },
  logoutText: {
    fontFamily: FONTS.medium,
    fontSize: 13,
    color: COLORS.danger,
  },
});

