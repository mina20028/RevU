import React, { useState } from 'react';
import { View, FlatList, StyleSheet, ScrollView, Text, TouchableOpacity, Image } from 'react-native';
import { Card, Button, SearchBar } from 'react-native-elements';
import { BottomSheet } from '@rneui/themed';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import m from '../assets/product/airpods.jpg';
const bestSellerItems = [
    {
        id: '1',
        name: 'Best Seller #1',
        price: '$54.95',
        image: require('../assets/product/airpods.jpg'),
        // url: 'https://www.amazon.com/INIU-High-Speed-Flashlight-Powerbank-Compatible/dp/B07CZDXDG8/ref=zg_bs_c_wireless_d_sccl_5/143-1339287-7399349?pd_rd_w=JBDXu&content-id=amzn1.sym.7379aab7-0dd8-4729-b0b5-2074f1cb413d&pf_rd_p=7379aab7-0dd8-4729-b0b5-2074f1cb413d&pf_rd_r=BCV29TW0C7JGKE5H9W4D&pd_rd_wg=IdjtN&pd_rd_r=6463f8f4-831b-4a9d-835d-6f2f6eb03ded&pd_rd_i=B07CZDXDG8&th=1',
        Text: 'Apple AirPods (2nd Generation) Wireless Ear Buds, Bluetooth Headphones with Lightning Charging Case Included, Over 24 Hours of Battery Life, Effortless Setup for iPhone',
    },
    {
        id: '2',
        name: 'Best Seller #2',
        price: '$24.74',
        image: require('../assets/product/Apple AirTag.jpg'),
        Text: 'Apple AirTag,Item Weight	0.39 Ounces,batteries required (included),Bluetooth 5.0 for proximity finding Apple-designed U1 chip for Ultra Wideband and Precision Finding NFC tap for Lost Mode',
    },
    {
        id: '3',
        name: 'Best Seller #3',
        price: '$29.99',
        image: require('../assets/product/FireTV.jpg'),
        Text: 'Amazon Fire TV Stick 4K streaming device, more than 1.5 million movies and TV episodes, supports Wi-Fi 6, watch free & live TV'
    },
    {
        id: '4',
        name: 'Best Seller #4',
        price: '$16.99',
        image: require('../assets/product/Surge Protector Power Strip.jpg'),
        Text: 'Surge Protector Power Strip - 8 Outlets with 4 USB (2 USB C) Charging Ports, Multi Plug Outlet Extender, 5Ft Braided Extension Cord, Flat Plug Wall Mount Desk USB Charging Station for Home Office ETL'
    },
    {
        id: '5',
        name: 'Best Seller #5',
        price: '$19.99',
        image: require('../assets/product/Tozo.jpg'),
        Text: 'TOZO A1 Mini Wireless Earbuds Bluetooth 5.3 in Ear Light-Weight Headphones Built-in Microphone, IPX5 Waterproof, Immersive Premium Sound Long Distance Connection Headset with Charging Case, Black'
    },
    {
        id: '6',
        name: 'Best Seller #6',
        price: '$22.49',
        image: require('../assets/product/Echo.jpg'),
        Text: 'Echo Dot (5th Gen, 2022 release) , With bigger vibrant sound, helpful routines and Alexa , Charcoal'
    },
    {
        id: '7',
        name: 'Best Seller #7',
        price: '$9.99',
        image: require('../assets/product/Digital Kitchen Scale.jpg'),
        Text: 'Ultrean Food Scale, Digital Kitchen Scale Weight Grams and Ounces for Baking Cooking and Meal Prep, 6 Units with Tare Function, 11lb (Batteries Included)'
    },
    {
        id: '8',
        name: 'Best Seller #8',
        price: '$$14.46',
        image: require('../assets/product/Charger.jpg'),
        Text: 'INIU Portable Charger, Slimmest 10000mAh 5V/3A Power Bank, USB C in&Out High-Speed Charging Battery Pack, External Phone Powerbank Compatible with iPhone 15 14 13 12 X Samsung S22 S21 Google iPad etc'
    },
    {
        id: '9',
        name: 'Best Seller #9',
        price: '$27.99',
        image: require('../assets/product/Wireless Charger.jpg'),
        Text: 'Wireless Charger iPhone Charging Station: 3 in 1 Charger Stand Multiple Devices for Apple - iPhone 15 14 Pro Max 13 12 11 - Watch 9 8 7 6 5 4 3 2 Se - Airpods 3 2 Pro'
    },
    {
        id: '10',
        name: 'Best Seller #10',
        price: '$11.95',
        image: require('../assets/product/story.jpg'),
        Text: 'Dad, I Want to Hear Your Story: A Father’s Guided Journal To Share His Life & His Love (Hear Your Story Books) Paperback - May 27, 2019'
    },
];

const mostReviewedItems = [
    {
        id: '1',
        name: 'Most Reviewed #1',
        price: '$27.99',
        image: require('../assets/product/watch.jpg'),
        Text: 'TOZO S2 44mm Smart Watch Alexa Built-in Fitness Tracker with Heart Rate and Blood Oxygen Monitor,Sleep Monitor 5ATM Waterproof HD Touchscreen for Men Women Compatible with iPhone&Android Black'
    },
    {
        id: '2',
        name: 'Most Reviewed #2',
        price: '$199.00',
        image: require('../assets/product/meta.jpg'),
        Text: 'Meta Quest 2 — Advanced All-In-One Virtual Reality Headset — 128 GB , Color White , Included Component , Quick Start Guide , Power Adapter (US, UK, EU, AU), Glass Spacer , 2 AA Batteries , Safety & Warranty Guide , Charging cable , VR headset, 2 Touch Controllers (L&R)'
    },
    {
        id: '3',
        name: 'Most Reviewed #3',
        price: '$27.99',
        image: require('../assets/product/Bottle.jpg'),
        Text: 'Owala FreeSip Insulated Stainless Steel Water Bottle with Straw for Sports and Travel , BPA-Free , 24-oz , Blue/Teal (Denim)'
    },
    {
        id: '4',
        name: 'Most Reviewed #4',
        price: '$19.99',
        image: require('../assets/product/microphone.jpg'),
        Text: 'BONAOK Wireless Bluetooth Karaoke Microphone, 3-in-1 Portable Handheld Mic Speaker for All Smartphones,Gifts for Girls Kids Adults All Age Q37(Rose Gold)'
    },
    {
        id: '5',
        name: 'Most Reviewed #5',
        price: '$34.55',
        image: require('../assets/product/Nespresso.jpg'),
        Text: 'Nespresso Capsules Vertuo , Double Espresso Chiaro , Medium Roast Espresso Coffee , 30-Count Coffee Pods , Brews 2.7oz'
    },
    {
        id: '6',
        name: 'Most Reviewed #6',
        price: '$159.99',
        image: require('../assets/product/iphone12.jpg'),
        Text: 'Apple iPhone 12 , 64GB , 4GB Ram , Screen Size	6.1 Inches ,Black - Fully Unlocked (Renewed) , Operating System	iOS 16'
    },
    {
        id: '7',
        name: 'Most Reviewed #7',
        price: '$139.00',
        image: require('../assets/product/Drill.jpg'),
        Text: 'DEWALT 20V MAX Cordless Drill and Impact Driver, Power Tool Combo Kit with 2 Batteries and Charger (DCK240C2)'
    },
    {
        id: '8',
        name: 'Most Reviewed #8',
        price: '$79.99',
        image: require('../assets/product/ring.jpg'),
        Text: 'Ring Video Doorbell, Satin Nickel bundle with Ring Stick Up Cam Battery, White'
    },
];

const recommendedItems = [
    {
        id: '1',
        name: 'Recommendation #1',
        price: '$39.99',
        image: require('../assets/product/Amada.jpg'),
        Text: 'AMADA HOMEFURNISHING Projector Stand, Laptop Stand with Adjustable Height 22 to 36 inch, Projector Mount as DJ Racks/Projector Tripod Stand/Laptop Floor Stand for Office, Home, Stage or Studio-AMPS01'
    },
    {
        id: '2',
        name: 'Recommendation #2',
        price: '$$14.46',
        image: require('../assets/product/Charger.jpg'),
        Text: 'INIU Portable Charger, Slimmest 10000mAh 5V/3A Power Bank, USB C in&Out High-Speed Charging Battery Pack, External Phone Powerbank Compatible with iPhone 15 14 13 12 X Samsung S22 S21 Google iPad etc'
    },
    {
        id: '3',
        name: 'Recommendation #3',
        price: '$27.99',
        image: require('../assets/product/watch.jpg'),
        Text: 'TOZO S2 44mm Smart Watch Alexa Built-in Fitness Tracker with Heart Rate and Blood Oxygen Monitor,Sleep Monitor 5ATM Waterproof HD Touchscreen for Men Women Compatible with iPhone&Android Black'
    },
    {
        id: '4',
        name: 'Recommendation #4',
        price: '$29.99',
        image: require('../assets/product/keyboard.jpg'),
        Text: 'Wireless Keyboard and Mouse Combo - RGB Backlit, Rechargeable & Light Up Letters, Full-Size, Ergonomic Tilt Angle, Sleep Mode, 2.4GHz Quiet Keyboard Mouse for Mac, Windows, Laptop, PC, Trueque'
    },
    {
        id: '5',
        name: 'Recommendation #5',
        price: '$968.00',
        image: require('../assets/product/Macbbok.jpg'),
        Text: 'Apple 2022 MacBook Air Laptop with M2 chip: 13.6-inch Liquid Retina Display, 8GB RAM, 256GB SSD Storage; Starlight with AppleCare+ (3 Years)'
    },
    {
        id: '6',
        name: 'Recommendation #6',
        price: '$21.99',
        image: require('../assets/product/amazonTv.jpg'),
        Text: 'Amazon Fire TV Stick, HD, sharp picture quality, fast streaming, free & live TV, Alexa Voice Remote with TV controls'
    },
    {
        id: '7',
        name: 'Recommendation #7',
        price: '$99.88',
        image: require('../assets/product/COSORI Air.jpg'),
        Text: 'COSORI Air Fryer 6 Qt, 9-in-1 Functions, 5 Fan Speeds, Nutrition Facts for 100+ In-App Recipes, Faster Roast, Bake, Dehydrate, Reheat, Broil, Proof, 95% Less Oil, Dishwasher Safe, TurboBlaze, Gray'
    },
    {
        id: '8',
        name: 'Recommendation #8',
        price: '$59.99',
        image: require('../assets/product/K-mini.jpg'),
        Text: 'Keurig K-Mini Single Serve Coffee Maker , Coffee Maker Type	Espresso Machine , Special Feature	Manual , Black'
    },
    {
        id: '9',
        name: 'Recommendation #9',
        price: '$39.99',
        image: require('../assets/product/TVwall.jpg'),
        Text: 'Mounting Dream TV Wall Mount for 32-65 Inch TV, TV Mount with Swivel and Tilt, Full Motion TV Bracket with Articulating Dual Arms, Fits 16inch Studs, Max VESA 400X400 mm, 99lbs, MD2380'
    },
    {
        id: '10',
        name: 'Recommendation #10',
        price: '159.95',
        image: require('../assets/product/Beats fitpro.jpg'),
        Text: 'Beats Fit Pro - True Wireless Noise Cancelling Earbuds - Apple H1 Headphone Chip, Compatible with Apple & Android, Class 1 Bluetooth, Built-in Microphone, 6 Hours of Listening Time - Beats Black'
    },
    {
        id: '11',
        name: 'Recommendation #11',
        price: '$429.99',
        image: require('../assets/product/Tv.jpg'),
        Text: 'Amazon Fire TV 55" Omni QLED Series 4K UHD smart TV, Dolby Vision IQ, Fire TV Ambient Experience, local dimming, hands-free with Alexa'
    },
    {
        id: '12',
        name: 'Recommendation #12',
        price: '$299.99',
        image: require('../assets/product/Gopro.jpg'),
        Text: 'GoPro HERO12 Black - Waterproof Action Camera with 5.3K60 Ultra HD Video, 27MP Photos, HDR, 1/1.9" Image Sensor, Live Streaming, Webcam, Stabilization'
    },
    {
        id: '13',
        name: 'Recommendation #13',
        price: '$29.97',
        image: require('../assets/product/Portable Bluetooth Speaker.jpg'),
        Text: 'Portable Bluetooth Speaker, IPX7 Waterproof Wireless Speaker with Colorful Flashing Lights, 25W Super Bass 24H Playtime, 100ft Range, TWS Pairing for Outdoor, Home, Party, Beach, Travel'
    },
    {
        id: '14',
        name: 'Recommendation #14',
        price: '$19.99',
        image: require('../assets/product/USB C Fast Charger.jpg'),
        Text: 'USB C Fast Charger 100W GaN 6 Port Type USB C Charging Station Hub Block USB C Wall Charger Power Strip Adapter Plug Cube Brick 3 USB C 3 USB A for iPad iPhone 15 14 13 12 11 Pro Max Pixel Note Galaxy'
    },
];

export default function Home({ navigation }) {
    const initialSearch = '';
    const initialBestSellerItems = bestSellerItems;
    const initialMostReviewedItems = mostReviewedItems;
    const initialRecommendedItems = recommendedItems;

    const [search, setSearch] = useState(initialSearch);
    const [filteredBestSeller, setFilteredBestSeller] = useState(initialBestSellerItems || []);
    const [filteredMostReviewed, setFilteredMostReviewed] = useState(initialMostReviewedItems || []);
    const [filteredRecommended, setFilteredRecommended] = useState(initialRecommendedItems || []);
    const [isVisible, setIsVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const press = (item) => {
        setSelectedItem(item);
        setIsVisible(true);
    };
    // const openURL = (url) => {
    //     Linking.openURL(url).catch(err => console.error("Couldn't load page", err));
    // };

    const updateSearch = (search) => {
        setSearch(search);
        setFilteredBestSeller(initialBestSellerItems.filter(item => item.Text.toLowerCase().includes(search.toLowerCase())));
        setFilteredMostReviewed(initialMostReviewedItems.filter(item => item.Text.toLowerCase().includes(search.toLowerCase())));
        setFilteredRecommended(initialRecommendedItems.filter(item => item.Text.toLowerCase().includes(search.toLowerCase())));
    };

    const renderProduct = ({ item }) => (
        <Card containerStyle={styles.card}>
            <Card.Title style={styles.cardTitle}>{item.name}</Card.Title>
            <TouchableOpacity onPress={() => press(item)}>
                <Image source={item.image}
                    style={{ resizeMode: 'contain', width: 190, height: 190 }}

                />
            </TouchableOpacity>
            <Text style={styles.price}>{item.price}</Text>
            <Card.Title numberOfLines={1}>{item.Text}</Card.Title>
            <Button
                title="Show"
                buttonStyle={styles.buyButton}
                titleStyle={styles.buyButtonTitle}
                onPress={() => press(item)}
            // onPress={() => openURL(item.url)}
            />
        </Card>
    );

    const customContent = () => (
        selectedItem ? (

            <View style={styles.contentContainer}>
                <ScrollView >

                    <Image source={selectedItem.image} style={{ resizeMode: 'contain', width: 150, height: 150, top: 15 }} />

                    <Text style={styles.contentTitle}> {selectedItem.Text}</Text>
                    <Text style={styles.contentPrice}>price :{selectedItem.price}</Text>
                    <View style={styles.listContainer}>

                    </View>
                    <TouchableOpacity onPress={() => setIsVisible(false)}>
                        <Text style={styles.closeButton}>Buy</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setIsVisible(false)}>
                        <Text style={styles.BuyButton}>close</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>

        ) : null
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
            <SafeAreaProvider>
                <SafeAreaView style={styles.container}>
                    <BottomSheet modalProps={{}} isVisible={isVisible}>
                        {customContent()}
                    </BottomSheet>
                </SafeAreaView>
            </SafeAreaProvider>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0000',
        top: 25,
        marginBottom: 40,
    },
    card: {
        width: 220,
        margin: 10,
        borderRadius: 10,
        borderColor: '#E0E0E0',
        borderWidth: 1,
        overflow: 'hidden',
        elevation: 1,
        alignItems: 'center'
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
        backgroundColor: 'black'
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
    searchContainer: {},
    searchInputContainer: {
        backgroundColor: '#EFEFEF',
        borderRadius: 10,
    },
    searchInput: {
        color: '#333',
    },
    contentContainer: {
        paddingTop: 20,
        padding: 20,
        paddingLeft: 10,
        backgroundColor: 'white',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        height: 390,
        marginBottom: -50,
        marginTop: 30,



    },
    contentTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        paddingLeft: 155,
        bottom: 140,
    },
    contentPrice: {
        fontSize: 17,
        color: '#6200EE',
        bottom: 100,
        left: 15
    },
    closeButton: {
        backgroundColor: '#3ABEF9',
        width: 250,
        height: 40,
        left: 51,
        bottom: 60,
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 15,
        borderRadius: 15,
        alignContent: 'center'
    },
    BuyButton: {
        backgroundColor: '#D04848',
        width: 290,
        height: 40,
        left: 30,
        bottom: 40,
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 15,
        borderRadius: 15,
        alignContent: 'center'
    },
});
