import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native"
import logo from "../../assets/img/logo.png";
import style from "../../assets/style/caso.js";
import bs from "../../assets/style/bootstrap.js";
import api from "../../services/api";


function Casos() {
    const nav = useNavigation();
    const [casos, setCasos] = useState([]);
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1);
    const [load, setLoad] = useState(false);
    const [viewCasos, setViewCasos] = useState(5);
    
    function navigation(caso) {
        nav.navigate("detalhe", { caso });
    }
    async function loadCasos() {
        if(load){
            return;
        }
        if (total > 0 && viewCasos >= total) {
            return;
        }
        setLoad(true);
        const res = await api.get("casos", {
            params: { page }
        });
        setPage(page + 1);
        setViewCasos(5*page);
        setCasos([...casos, ...res.data]);
        setTotal(res.headers['x-total-count']);
        setLoad(false)
    }
    useEffect(() => {
        loadCasos();
    }, []);

    return (
        <View style={[bs.container, bs.bgGray]}>
            <View style={style.header}>
                <Image source={logo} />
                <Text>
                    Total de <Text style={[bs.txtBold]}>{total} casos</Text>
                </Text>
            </View>
            <View style={bs.col3}>
                <Text style={[bs.txtBold, bs.txt4, bs.pt1]}>Bem-vindo!</Text>
                <Text style={[bs.txtGrayDark, bs.txt2]}>Escolha um dos casos abaixo e salve o dia</Text>
            </View>
            <FlatList
                data={casos}
                style={[bs.my2]}
                keyExtractor={caso => String(caso.id)}
                showsVerticalScrollIndicator={false}
                onEndReached={loadCasos}
                onEndReachedThreshold={0.2}
                renderItem={({ item: caso }) => (
                    <View style={[bs.r1, bs.bgWhite, bs.px2, bs.py1, bs.mb2]}>
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
                        <View style={[bs.mb5]}>
                            <Text style={[bs.txtBold]}>Valor</Text>
                            <Text>{Intl.NumberFormat("pt-BR", {
                                style: "currency",
                                currency: "BRL"
                            }).format(caso.value)}</Text>
                        </View>
                        <TouchableOpacity onPress={() => navigation(caso)} style={[bs.row, bs.justifyContentBetween]}>
                            <Text style={[bs.txtDanger, bs.txtBold]}>Ver mais detalhes</Text>
                            <Feather name="arrow-right" size={16} color="#dc3545" />
                        </TouchableOpacity>
                    </View>
                )} />

        </View>
    );
}


export default Casos;