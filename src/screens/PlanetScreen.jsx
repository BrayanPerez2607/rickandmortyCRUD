import React, { useState, useEffect } from 'react';

import { ScrollView, ActivityIndicator } from 'react-native';
import { fetchLocation } from '../api/rickAndMortyApi';

import PlanetCard from '../components/PlanetCard.jsx';

import styles from '../styles/CharacterStyles.jsx';

export default function PlanetScreen({ route }) {
  const { url } = route.params;
  const [planet, setPlanet] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPlanetData = async () => {
      try {
        const planetData = await fetchLocation(url);
        setPlanet(planetData);
      } catch (err) {
        console.error('Error fetching planet:', err);
      } finally {
        setLoading(false);
      }
    };

    loadPlanetData();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="green" />;
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <PlanetCard planet={planet} />
    </ScrollView>
  );
}
