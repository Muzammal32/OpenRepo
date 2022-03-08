import React, {useEffect} from 'react';
import {
    ActivityIndicator,
    FlatList, Image,
    StatusBar,
    Text, TouchableOpacity,
    View
} from 'react-native';

import styles from './style';
import {colors, images} from "../../constants";
import Loading from "../../components/Loader";
import {connect} from "react-redux";
import {getProducts, getProductsPagination} from "../../store/products/products-actions";
import {ScreenScale} from "../../utils/CommonHelper";

const Card = ({data, props}) =>{
    return (
        <TouchableOpacity style={styles.card} activeOpacity={0.9} onPress={()=> props.navigation.navigate('Product Details',{item: data})} >
            <Image source={{uri:data.image}} imageStyle={styles.image} style={styles.image_section}/>
            {data.tags.length > 0 &&
            <View style={styles.tag}>
                <Text style={styles.tagText}>{data.tags[0].name}</Text>
            </View>
            }
            <View style={styles.description_section}>
                <Text style={styles.titleText}>{data.title}</Text>
                <Text style={styles.product_no}>{data.product_code}</Text>
                <Text style={styles.descriptionText}>
                    {data.description}
                </Text>
            </View>
        </TouchableOpacity>
    )
};

function ProductCatalog(props) {
    const {navigation} = props;
    useEffect(() => {
        navigation.addListener('focus', () => {
            // Screen was focused
            // Do something
            getProductsList();
        });
    }, []);

    const getProductsList = () => {
        props.getProducts((res) => {});
    };

    const onRefresh = () =>{
        getProductsList()
    };

    const LoadMoreRandomData = () => {
        let split;
        if (props.productsPagination.next !== null) {
            split = props.productsPagination.next.split("products");
            props.getProductsPagination(props.productsList, split[1], ()=>{});
        }
    };

    return (
        <View style={styles.screen}>
            <StatusBar barStyle={'dark-content'} backgroundColor={colors.WHITE}/>
            <Loading loading={props.processing}/>
            <View showsVerticalScrollIndicator={false}>
                <Text style={styles.homeText}>Product Catalog</Text>
                <Text style={styles.homeSubText}>{props.productsList.length} Product</Text>
                <FlatList
                    data={props.productsList}
                    showsVerticalScrollIndicator={false}
                    refreshing={false}
                    initialNumToRender={10}
                    onRefresh={onRefresh}
                    onEndReachedThreshold={0}
                    onEndReached={LoadMoreRandomData}
                    ListFooterComponent={() =>
                        props.isProcessingMore ? (
                            <View style={{marginBottom: ScreenScale(80)}}>
                                <ActivityIndicator size="large" color={colors.BLACK} />
                            </View>
                        ) : (
                            <View style={{marginBottom: ScreenScale(80)}}/>
                        )
                    }
                    numColumns={2}
                    contentContainerStyle={{paddingHorizontal: 1}}
                    columnWrapperStyle={{justifyContent:'space-between'}}
                    keyExtractor={(item, index) => `${item.title}_${index}`}
                    renderItem={({item}) => {
                        return (
                            <Card data={item} props={props}/>
                        );
                    }}
                />
            </View>
        </View>
    )
}

const mapStateToProps = (state) => {
    return {
        processing: state.products.processing,
        isProcessingMore: state.products.isProcessingMore,
        productsList: state.products.productsList,
        productsPagination: state.products.productsPagination
    };
};
export default connect(mapStateToProps, {getProducts, getProductsPagination})(ProductCatalog);
