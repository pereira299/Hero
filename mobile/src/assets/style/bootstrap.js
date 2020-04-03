import { StyleSheet, Dimensions } from "react-native";
import Constants from 'expo-constants';

var width = Dimensions.get("screen").width;

export default StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal: 10,
        paddingTop: Constants.statusBarHeight +10,
    },
    containerFluid:{
        flex:1,
        paddingHorizontal: 5,
        paddingTop: Constants.statusBarHeight +5,
    },
    p0:{
        padding:0
    },
    p1:{
        padding:10
    },
    p2:{
        padding:20
    },
    p3:{
        padding:30
    },
    p4:{
        padding:40
    },
    p5:{
        padding:50
    },
    m0:{
        margin:0
    },
    m1:{
        margin:10
    },
    m2:{
        margin:20
    },
    m3:{
        margin:30
    },
    m4:{
        margin:40
    },
    m5:{
        margin:50
    },
    pbar1:{
        paddingTop: Constants.statusBarHeight +10,
    },
    pbar2:{
        paddingTop: Constants.statusBarHeight +20,
    },
    pbar3:{
        paddingTop: Constants.statusBarHeight +30,
    },
    pbar4:{
        paddingTop: Constants.statusBarHeight +40,
    },
    pbar5:{
        paddingTop: Constants.statusBarHeight +50,
    },
    px0:{
        paddingHorizontal:0
    },
    px1:{
        paddingHorizontal:10
    },
    px2:{
        paddingHorizontal:20
    },
    px3:{
        paddingHorizontal:30
    },
    px4:{
        paddingHorizontal:40
    },
    px5:{
        paddingHorizontal:50
    },
    py0:{
        paddingVertical:0
    },
    py1:{
        paddingVertical:10
    },
    py2:{
        paddingVertical:20
    },
    py3:{
        paddingVertical:30
    },
    py4:{
        paddingVertical:40
    },
    py5:{
        paddingVertical:50
    },
    pt0:{
        paddingTop:0
    },
    pt1:{
        paddingTop:10
    },
    pt2:{
        paddingTop:20
    },
    pt3:{
        paddingTop:30
    },
    pt4:{
        paddingTop:40
    },
    pt5:{
        paddingTop:50
    },
    pb0:{
        paddingBottom:0
    },
    pb1:{
        paddingBottom:10
    },
    pb2:{
        paddingBottom:20
    },
    pb3:{
        paddingBottom:30
    },
    pb4:{
        paddingBottom:40
    },
    pb5:{
        paddingBottom:50
    },
    pl0:{
        paddingLeft:0
    },
    pl1:{
        paddingLeft:10
    },
    pl2:{
        paddingLeft:20
    },
    pl3:{
        paddingLeft:30
    },
    pl4:{
        paddingLeft:40
    },
    pl5:{
        paddingLeft:50
    },
    pr0:{
        paddingRight:0
    },
    pr1:{
        paddingRight:10
    },
    pr2:{
        paddingRight:20
    },
    pr3:{
        paddingRight:30
    },
    pr4:{
        paddingRight:40
    },
    pr5:{
        paddingRight:50
    },
    mx1:{
        marginHorizontal:10
    },
    mx2:{
        marginHorizontal:20
    },
    mx3:{
        marginHorizontal:30
    },
    mx4:{
        marginHorizontal:40
    },
    mx5:{
        marginHorizontal:50
    },
    my1:{
        marginVertical:10
    },
    my2:{
        marginVertical:20
    },
    my3:{
        marginVertical:30
    },
    my4:{
        marginVertical:40
    },
    my5:{
        marginVertical:50
    },
    mt1:{
        marginTop:10
    },
    mt2:{
        marginTop:20
    },
    mt3:{
        marginTop:30
    },
    mt4:{
        marginTop:40
    },
    mt5:{
        marginTop:50
    },
    mb1:{
        marginBottom:10
    },
    mb2:{
        marginBottom:20
    },
    mb3:{
        marginBottom:30
    },
    mb4:{
        marginBottom:40
    },
    mb5:{
        marginBottom:50
    },
    ml1:{
        marginLeft:10
    },
    ml2:{
        marginLeft:20
    },
    ml3:{
        marginLeft:30
    },
    ml4:{
        marginLeft:40
    },
    ml5:{
        marginLeft:50
    },
    mr1:{
        marginRight:10
    },
    mr2:{
        marginRight:20
    },
    mr3:{
        marginRight:30
    },
    mr4:{
        marginRight:40
    },
    mr5:{
        marginRight:50, 
    },
    col1:{
        width: width /4,
    },
    col2:{
        width: width /2,
    },
    col3:{
        width: (width /2) + (width/4),
    },
    col4:{
        width: width,
    },
    r0:{
        borderRadius:0,
    },
    r1:{
        borderRadius:10,
    },
    r2:{
        borderRadius:20,
    },
    r3:{
        borderRadius:30,
    },
    r4:{
        borderRadius:40,
    },
    r5:{
        borderRadius:50,
    },
    rt0:{
        borderTopLeftRadius:0,
        borderTopRightRadius:0,
    },
    rt1:{
        borderTopLeftRadius:10,
        borderTopRightRadius:20,
    },
    rt2:{
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
    },
    rt3:{
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
    },
    rb0:{
        borderBottomLeftRadius:0,
        borderBottomRightRadius:0,
    },
    rb1:{
        borderBottomLeftRadius:10,
        borderBottomRightRadius:20,
    },
    rb2:{
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
    },
    rb3:{
        borderBottomLeftRadius:30,
        borderBottomRightRadius:30,
    },
    rr0:{
        borderTopRightRadius:0,
        borderBottomRightRadius:0,
    },
    rr1:{
        borderTopRightRadius:10,
        borderBottomRightRadius:10,
    },
    rr2:{
        borderTopRightRadius:20,
        borderBottomRightRadius:20,
    },
    rr3:{
        borderTopRightRadius:30,
        borderBottomRightRadius:30,
    },
    rl0:{
        borderTopLeftRadius:0,
        borderBottomLeftRadius:0,
    },
    rl1:{
        borderTopLeftRadius:10,
        borderBottomLeftRadius:10,
    },
    rl2:{
        borderTopLeftRadius:20,
        borderBottomLeftRadius:20,
    },
    rl3:{
        borderTopLeftRadius:30,
        borderBottomLeftRadius:30,
    },
    row:{
        flexDirection:"row",
    },
    offset1:{
        marginLeft:width/4
    },
    offset2:{
        marginLeft:width/2
    },
    offset3:{
        marginLeft: (width/2) + (width/4)
    },
    bw1:{
        borderWidth:1
    },
    bw2:{
        borderWidth:2
    },
    bw3:{
        borderWidth:3
    },
    bw4:{
        borderWidth:4
    },
    bgDanger:{
        backgroundColor: "#dc3545",
    },
    bcDanger:{
        borderColor: "#dc3545",
    },
    txtDanger:{
        color:"#dc3545",
    },
    bgPrimary:{
        backgroundColor: "#007bff",
    },
    bcPrimary:{
        borderColor: "#007bff",
    },
    txtPrimary:{
        color:"#007bff",
    },
    bgSecondary:{
        backgroundColor: "#6c757d",
    },
    bcSecondary:{
        borderColor: "#6c757d",
    },
    txtSecondary:{
        color:"#6c757d",
    },
    bgSucess:{
        backgroundColor: "#28a745",
    },
    bcSucess:{
        borderColor: "#28a745",
    },
    txtSucess:{
        color:"#28a745",
    },
    bgWarning:{
        backgroundColor: "#ffc107",
    },
    bcWarning:{
        borderColor: "#ffc107",
    },
    txtWarning:{
        color:"#ffc107",
    },
    bgInfo:{
        backgroundColor: "#17a2b8",
    },
    bcInfo:{
        borderColor: "#17a2b8",
    },
    txtInfo:{
        color:"#17a2b8",
    },
    bgGray:{
        backgroundColor: "#f7f7f7",
    },
    bcGray:{
        borderColor: "#f7f7f7",
    },
    txtGray:{
        color:"#f7f7f7",
    },
    bgDark:{
        backgroundColor: "#343a40",
    },
    bcDark:{
        borderColor: "#343a40",
    },
    txtDark:{
        color:"#343a40",
    },
    bgWhite:{
        backgroundColor: "#ffffff",
    },
    bcWhite:{
        borderColor: "#ffffff",
    },
    txtWhite:{
        color:"#ffffff",
    },
    txtLigth:{
        fontWeight:"200"
    },
    txtBold:{
        fontWeight:"bold"
    },
    justifyContentBetween:{
        justifyContent:"space-between",
    },
    justifyContentAround:{
        justifyContent:"space-around",
    },
    justifyContentEvenly:{
        justifyContent:"space-evenly",
    },
    justifyContentCenter:{
        justifyContent:"center",
    },
    justifyContentStart:{
        justifyContent:"flex-start",
    },
    justifyContentEnd:{
        justifyContent:"flex-end",
    },
    txt1:{
        fontSize: 13,
    },
    txt2:{
        fontSize: 17,
    },
    txt3:{
        fontSize: 22,
    },
    txt4:{
        fontSize: 26,
    },
    txt5:{
        fontSize: 30,
    },
    bgDangerDark:{
        backgroundColor: "#ac1525",
    },
    bcDangerDark:{
        borderColor: "#ac1525",
    },
    txtDangerDark:{
        color:"#ac1525",
    },
    bgPrimaryDark:{
        backgroundColor: "#005bdf",
    },
    bcPrimaryDark:{
        borderColor: "#005bdf",
    },
    txtPrimaryDark:{
        color:"#005bdf",
    },
    bgSecondaryDark:{
        backgroundColor: "#4c555d",
    },
    bcSecondaryDark:{
        borderColor: "#4c555d",
    },
    txtSecondaryDark:{
        color:"#4c555d",
    },
    bgSucessDark:{
        backgroundColor: "#088725",
    },
    bcSucessDark:{
        borderColor: "#088725",
    },
    txtSucessDark:{
        color:"#088725",
    },
    bgWarningDark:{
        backgroundColor: "#dfa107",
    },
    bcWarningDark:{
        borderColor: "#dfa107",
    },
    txtWarningDark:{
        color:"#dfa107",
    },
    bgInfoDark:{
        backgroundColor: "#078298",
    },
    bcInfoDark:{
        borderColor: "#078298",
    },
    txtInfoDark:{
        color:"#078298",
    },
    bgGrayDark:{
        backgroundColor: "#b0b0b0",
    },
    bcGrayDark:{
        borderColor: "#b0b0b0",
    },
    txtGrayDark:{
        color:"#b0b0b0",
    },
    bgBlack:{
        backgroundColor: "#000000",
    },
    bcBlack:{
        borderColor: "#000000",
    },
    txtBlack:{
        color:"#000000",
    },
    bgWhiteDark:{
        backgroundColor: "#ffffff",
    },
    bcWhiteDark:{
        borderColor: "#ffffff",
    },
    txtWhiteDark:{
        color:"#ffffff",
    },
    alignCenter:{
        alignItems:"center"
    },
    alignbaseline:{
        alignItems:"baseline"
    },
    alignStretch:{
        alignItems:"stretch"
    },
    alignStart:{
        alignItems:"flex-start"
    },
    alignEnd:{
        alignItems:"flex-end"
    },
    autoAlignCenter:{
        alignSelf:"center"
    },
    autoAlignbaseline:{
        alignSelf:"baseline"
    },
    autoAlignStretch:{
        alignSelf:"stretch"
    },
    autoAlignStart:{
        alignSelf:"flex-start"
    },
    autoAlignEnd:{
        alignSelf:"flex-end"
    }
});
