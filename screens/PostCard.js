import React, { Component } from "react";
import {View, Text, StyleSheet, Image} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { RFValue } from "react-native-responsive-fontsize";

export default class PostCard extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    componentDidMount(){

    }

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.cardContainer}>
                    <View style={styles.authorContainer}>
                        <View style={styles.authorImageContainer}>
                            <Image
                                source={require("../assets/profile_img.png")}
                                style={styles.profileImage}
                            />
                        </View>
                        <View style={styles.authorNameContainer}>
                            <Text style={styles.authorNameText}>{this.props.post.author}</Text>
                            <Text style={styles.dateText}>{this.props.post.date}</Text>
                        </View>
                    </View>
                    <Image
                        source={require("../assets/image_7.jpg")}
                        style={styles.postImage}
                    />
                    <View style={styles.captionContainer}>
                        <Text style={styles.captionText}>{this.props.post.caption}</Text>
                    </View>
                    <View style={styles.actionContainer}>
                        <View style={styles.likeButton}>
                            <Ionicons
                                name={"heart"}
                                size={RFValue(30)}
                                color={"white"}
                            />
                            <Text style={styles.likeText}>{this.props.post.likes}</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    cardContainer: {
        margin: RFValue(13),
        padding: RFValue(20),
        borderRadius: RFValue(20),
        backgroundColor: "#2a2a2a"
    },
    authorContainer: {
        flex: 0.1,
        flexDirection: "row"
    },
    authorImageContainer: {
        flex: 0.15,
        alignItems: "center",
        justifyContent: "center"
    },
    profileImage: {
        width: "100%",
        height: "100%",
        resizeMode: "contain",
        borderRadius: RFValue(100)
    },
    authorNameContainer: {
        flex: 0.85,
        justifyContent: "center"
    },
    authorNameText: {
        marginLeft: 10,
        color: "white",
        fontSize: RFValue(20)
    },
    dateText: {
        marginLeft: 10,
        color: "#1c1c1c",
        fontSize: RFValue(12)
    },
    postImage: {
        width: "100%",
        alignSelf: "center",
        height: RFValue(275),
        resizeMode: "contain",
        marginTop: RFValue(20)
    },
    captionContainer: {
        
    },
    captionText: {
        fontSize: 13,
        color: "white",
        paddingTop: RFValue(10)
    },
    actionContainer: {
        padding: RFValue(10),
        alignItems: "center",
        justifyContent: "center",
    },
    likeButton: {
        marginTop: 17,
        width: RFValue(160),
        height: RFValue(40),
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center",
        borderRadius: RFValue(30),
        backgroundColor: "#eb3948"
    },
    likeText: {
        color: "white",
        fontSize: RFValue(25),
        marginLeft: RFValue(5)
    }
});