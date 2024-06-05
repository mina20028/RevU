import React, { useState } from 'react';
import { View, FlatList, StyleSheet, ScrollView, Text } from 'react-native';
import { Card, Button, SearchBar } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const bestSellerItems = [
    {
        id: '1',
        name: 'Best Seller 1',
        price: '$10',
        image: 'https://via.placeholder.com/150',
    },
    {
        id: '2',
        name: 'Best Seller 2',
        price: '$20',
        image: 'https://via.placeholder.com/150',
    },
    {
        id: '7',
        name: 'Best Seller 3',
        price: '$30',
        image: 'https://via.placeholder.com/150',
    },
    {
        id: '8',
        name: 'Best Seller 4',
        price: '$40',
        image: 'https://via.placeholder.com/150',
    },
    {
        id: '9',
        name: 'Best Seller 5',
        price: '$50',
        image: 'https://via.placeholder.com/150',
    },
    {
        id: '10',
        name: 'Best Seller 6',
        price: '$60',
        image: 'https://via.placeholder.com/150',
    },
];

const mostReviewedItems = [
    {
        id: '3',
        name: 'Most Reviewed 1',
        price: '$30',
        image: 'https://via.placeholder.com/150',
    },
    {
        id: '4',
        name: 'Most Reviewed 2',
        price: '$40',
        image: 'https://via.placeholder.com/150',
    },
    {
        id: '11',
        name: 'Most Reviewed 3',
        price: '$50',
        image: 'https://via.placeholder.com/150',
    },
    {
        id: '12',
        name: 'Most Reviewed 4',
        price: '$60',
        image: 'https://via.placeholder.com/150',
    },
    {
        id: '13',
        name: 'Most Reviewed 5',
        price: '$70',
        image: 'https://via.placeholder.com/150',
    },
    {
        id: '14',
        name: 'Most Reviewed 6',
        price: '$80',
        image: 'https://via.placeholder.com/150',
    },
];

const recommendedItems = [
    {
        id: '5',
        name: 'Recommendation 1',
        price: '$50',
        image: 'https://via.placeholder.com/150',
    },
    {
        id: '6',
        name: 'Recommendation 2',
        price: '$60',
        image: 'https://via.placeholder.com/150',
    },
    {
        id: '15',
        name: 'Recommendation 3',
        price: '$70',
        image: 'https://via.placeholder.com/150',
    },
    {
        id: '16',
        name: 'Recommendation 4',
        price: '$80',
        image: 'https://via.placeholder.com/150',
    },
    {
        id: '17',
        name: 'Recommendation 5',
        price: '$90',
        image: 'https://via.placeholder.com/150',
    },
    {
        id: '18',
        name: 'Recommendation 6',
        price: '$100',
        image: 'https://via.placeholder.com/150',
    },
];

export default function Home({ navigation }) {
    initialSearch = '',
        initialBestSellerItems = bestSellerItems,
        initialMostReviewedItems = mostReviewedItems,
        initialRecommendedItems = recommendedItems
    const [search, setSearch] = useState(initialSearch);
    const [filteredBestSeller, setFilteredBestSeller] = useState(initialBestSellerItems || []);
    const [filteredMostReviewed, setFilteredMostReviewed] = useState(initialMostReviewedItems || []);
    const [filteredRecommended, setFilteredRecommended] = useState(initialRecommendedItems || []);
    const press = () => {
        navigation.navigate('Login')
    }

    const updateSearch = (search) => {
        setSearch(search);
        setFilteredBestSeller(initialBestSellerItems.filter(item => item.name.toLowerCase().includes(search.toLowerCase())));
        setFilteredMostReviewed(initialMostReviewedItems.filter(item => item.name.toLowerCase().includes(search.toLowerCase())));
        setFilteredRecommended(initialRecommendedItems.filter(item => item.name.toLowerCase().includes(search.toLowerCase())));
    };

    const renderProduct = ({ item }) => (
        <Card containerStyle={styles.card}>
            <Card.Title style={styles.cardTitle}>{item.name}</Card.Title>
            <Card.Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.price}>{item.price}</Text>
            <Button
                title="Buy Now"
                buttonStyle={styles.buyButton}
                titleStyle={styles.buyButtonTitle}
                onPress={press}
            />
        </Card>
    );

    return (
        <ScrollView style={styles.container}>
            <View style={styles.container}>
                <SearchBar
                    placeholder="Search Products..."
                    onChangeText={updateSearch}
                    value={search}
                    containerStyle={styles.searchContainer}
                    inputContainerStyle={styles.searchInputContainer}
                    inputStyle={styles.searchInput}
                />
                <Text style={styles.categoryTitle}>Best Seller Items</Text>
                <FlatList
                    data={filteredBestSeller}
                    renderItem={renderProduct}
                    keyExtractor={item => item.id}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                />
                <Text style={styles.categoryTitle}>Most Reviewed Items</Text>
                <FlatList
                    data={filteredMostReviewed}
                    renderItem={renderProduct}
                    keyExtractor={item => item.id}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                />
                <Text style={styles.categoryTitle}>Recommendation Items</Text>
                <FlatList
                    data={filteredRecommended}
                    renderItem={renderProduct}
                    keyExtractor={item => item.id}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0000', // White background color
        padding: 1,
    },
    card: {
        width: 220,
        margin: 10,
        borderRadius: 10,
        borderColor: '#E0E0E0',
        borderWidth: 1,
        overflow: 'hidden',
        elevation: 1,
    },
    cardTitle: {
        fontSize: 16,
        color: '#333',
        marginBottom: 5,
    },
    image: {
        height: 150,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    price: {
        marginVertical: 10,
        fontSize: 18,
        color: '#6200EE',
    },
    buyButton: {
        backgroundColor: '#6200EE',
        borderRadius: 5,
    },
    buyButtonTitle: {
        fontSize: 16,
    },
    categoryTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 10,
        marginLeft: 10,
        color: '#333',
    },
    searchContainer: {
        backgroundColor: 'transparent',
        borderBottomWidth: 0,
        borderTopWidth: 0,
        marginBottom: 20,
    },
    searchInputContainer: {
        backgroundColor: '#EFEFEF',
        borderRadius: 10,
    },
    searchInput: {
        color: '#333',
    },
});

// export default ProductsScreen;