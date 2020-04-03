import React from "react";
import { View, Image, Text, Linking } from "react-native";
import logo from "../../assets/img/logo.png";
import bs from "../../assets/style/bootstrap.js";
import Parser from "../../assets/js/Parse";
import { useNavigation, useRoute } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import * as MailComposer from "expo-mail-composer";

function Detalhe() {
    const nav = useNavigation();
    const route = useRoute();
    const caso = route.params.caso;
    const msg = "Olá "+caso.name+", estou estou entrando em contato pois tenho interesse em ajudar no caso "+caso.title+" com o valor de "+caso.value+" reais";
    
    function navigation() {
        nav.navigate("casos");
    }
    function sendEmail() {
        MailComposer.composeAsync({
            subject: "Heroi do caso:"+caso.title,
            recipients: [caso.email],
            body: msg
        })
    }
    function sendWhatsapp() {
        Linking.openURL(`whatsapp://send?phone=${caso.whatsapp}&text=${msg}`);
    }
    return (
        <View style={[bs.container, bs.bgGray]}>
            <View style={[bs.justifyContentBetween, bs.row, bs.alignCenter, bs.mb3]}>
                <Image source={logo} />
                <TouchableOpacity onPress={navigation} >
                    <Text style={[bs.txtDanger, bs.txtBold, bs.txt2, bs.mr1]}>Voltar</Text>
                </TouchableOpacity>
            </View>
            <View style={[bs.r1, bs.bgWhite, bs.px2, bs.py2, bs.mb2]}>
                <View style={[bs.row, bs.mb2]}>
                    <View style={[bs.col2]}>
                        <Text style={[bs.txtBold]}>Caso</Text>
                        <Text>{caso.title}</Text>
                    </View>
                    <View style={[bs.px2]}>
                        <Text style={[bs.txtBold]}>ONG</Text>
                        <Text>{caso.name}</Text>
                    </View>
                </View>
                <View style={[bs.mb2]}>
                    <Text style={[bs.txtBold]}>Descrição</Text>
                    <Text>{caso.description}</Text>
                </View>
                <View style={[]}>
                    <Text style={[bs.txtBold]}>Valor</Text>
                    <Text>{Intl.NumberFormat("pt-BR", {
                        style: "currency",
                        currency: "BRL"
                    }).format(caso.value)}</Text>
                </View>
            </View>
            <View style={[bs.r1, bs.bgWhite, bs.px2, bs.py1, bs.mb2]}>
                <Text style={[bs.txt3, bs.txtBold]}>Salve o dia!</Text>
                <Text style={[bs.txt3, bs.txtBold, bs.mb2]}>Seja o heroí desse caso</Text>
                <Text style={[bs.mb1]}>Entre em contato</Text>
                <View style={[bs.row, bs.justifyContentBetween]}>
                    <TouchableOpacity onPress={sendWhatsapp}>
                        <Text style={[bs.r1, bs.txtBold, bs.bgDanger, bs.txtWhite, bs.px4, bs.py2, bs.mr1]}>WhatsApp</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={sendEmail}>
                        <Text style={[bs.r1, bs.txtBold, bs.bgDanger, bs.txtWhite, bs.px4, bs.py2]}>E-mail</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

export default Detalhe;