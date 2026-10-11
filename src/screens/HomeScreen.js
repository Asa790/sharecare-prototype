import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS, FONTS } from '../constants/theme';
import HomeHeader from '../components/HomeHeader';
import HeroBanner from '../components/HeroBanner';
import CategorySection from '../components/CategorySection';
import DonationCard from '../components/DonationCard';
import VolunteerCard from '../components/VolunteerCard';
import { DONASI_DATA, VOLUNTEER_DATA } from '../data/mockData';

export default function HomeScreen({ navigation }) {
  const handleSearchPress = () => {
    navigation.navigate('Search');
  };

  const handleNotificationPress = () => {
    navigation.navigate('Notification');
  };

  const handleCategorySelect = (cat) => {
    // Navigable prototype trigger
    navigation.navigate('Search', { category: cat.title });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.primary} />
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* Header with Search and Logo */}
        <HomeHeader
          onSearchPress={handleSearchPress}
          onNotificationPress={handleNotificationPress}
        />

        {/* Hero Banner Slider */}
        <HeroBanner
          onPress={() =>
            navigation.navigate('EventDetail', {
              event: DONASI_DATA[0],
              type: 'donasi',
            })
          }
        />

        {/* Kategori Section (Edukasi, Lingkungan, Kesehatan, Bencana) */}
        <CategorySection onCategorySelect={handleCategorySelect} />

        {/* Donasi Terdekat Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <View>
              <Text style={styles.sectionTitle}>Donasi Terdekat</Text>
              <Text style={styles.sectionSubtitle}>Bantu saudara kita yang membutuhkan uluran tangan</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Search')}>
              <Text style={styles.seeAllText}>Lihat Semua</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={DONASI_DATA}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <DonationCard
                item={item}
                onPress={() => navigation.navigate('EventDetail', { event: item, type: 'donasi' })}
              />
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.horizontalListContent}
          />
        </View>

        {/* Kegiatan Volunteer Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <View>
              <Text style={styles.sectionTitle}>Kegiatan Volunteer</Text>
              <Text style={styles.sectionSubtitle}>Bergabung dalam aksi sosial nyata di sekitarmu</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Search')}>
              <Text style={styles.seeAllText}>Lihat Semua</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={VOLUNTEER_DATA}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <VolunteerCard
                item={item}
                onPress={() => navigation.navigate('EventDetail', { event: item, type: 'volunteer' })}
              />
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.horizontalListContent}
          />
        </View>

        {/* Bottom spacing for smooth tab navigation clearance */}
        <View style={styles.bottomSpacer} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  contentContainer: {
    paddingBottom: 24,
  },
  section: {
    marginBottom: 26,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingHorizontal: 20,
    marginBottom: 12,
  },
  sectionTitle: {
    fontFamily: FONTS.bold,
    fontSize: 18,
    color: COLORS.textDark,
  },
  sectionSubtitle: {
    fontFamily: FONTS.regular,
    fontSize: 11,
    color: COLORS.textMuted,
    marginTop: 2,
  },
  seeAllText: {
    fontFamily: FONTS.medium,
    fontSize: 12,
    color: COLORS.accent,
    marginTop: 2,
  },
  horizontalListContent: {
    paddingHorizontal: 20,
    paddingVertical: 4,
  },
  bottomSpacer: {
    height: 16,
  },
});

