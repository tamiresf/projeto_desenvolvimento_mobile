import { ScrollView, View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

const styles = StyleSheet.create({
  
scroll:{
  
},
  container: {
    flex: 1,
    paddingTop: 30,
    marginTop: 50,
    gap: 20,
    justifyContent: 'space-around',
    paddingHorizontal: 5,
    marginRight: 7,
    //backgroundColor: '#100D28',
    

  },
  imageTamires: {
    position: 'relative',
    width: 104,
    height: 104,
    borderRadius: 52,
    marginBottom: 60,

  },

  textTamires: {
    flex: 1,
    textAlign: 'center',
    fontSize: 16,
    marginBottom: 30,
  },

  contentTamires: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
    gap: 3,
  },

  imagePaulo: {
    position: 'relative',
    width: 104,
    height: 104,
    borderRadius: 52,
    marginBottom: 15,
    marginHorizontal: 297,
    marginTop: 40,


  },
  textPaulo: {
    flex: 1,
    textAlign: 'center',
    fontSize: 14,
    padding: 30,
    marginRight: 80,
    marginTop: -170,
    marginBottom: 60,
    marginHorizontal: -25,

  },

  contentPaulo: {
    alignItems:'baseline',
    gap:3,
  },

  imageRayane: {
    width: 104,
    height: 104,
    borderRadius: 52,
    
  },

  textRayane: {
    flex: 1,
    textAlign: 'center',
    fontSize: 16,
    marginBottom: 30,
  },

  contentRayane: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: -40,
    gap: 3,
  },

  imageThadeu: {
    position: 'relative',
    width: 104,
    height: 104,
    borderRadius: 52,
    marginBottom: 15,
    marginHorizontal: 297,
    marginTop: 80,
  },

  textThadeu: {
    flex: 1,
    textAlign: 'center',
    fontSize: 14,
    padding: 30,
    marginRight: 80,
    marginTop: -170,
    marginBottom: 60,
    marginHorizontal: -25,

  },

  imageWallace: {
    width: 104,
    height: 104,
    borderRadius: 52,
  },

  textTamires: {
    flex: 1,
    textAlign: 'center',
    fontSize: 14,
    marginBottom: 30,
  },

  contentWallace: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: -35,
    gap: 3,
  },

});

const Perfil = () => {
  return (

    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}>

        <View style={styles.contentTamires}>

          <Image
            style={styles.imageTamires}
            source={require('../../../assets/Tamires.jpeg')} />
          <Text style={{...styles.textTamires, color: 'black'}}><Text style={{ fontWeight: 'bold' }}>Tamires</Text> é uma carioca raiz. Cursando administração, mas algo sempre cutucava sua curiosidade: a tecnologia. Nunca teve lá muito contato com bits e bytes, mas decidiu agarrar essa oportunidade de ouro: está fazendo um curso de fullstack no Serratec. É como se estivesse descobrindo um universo paralelo cheio de linhas de código e possibilidades infinitas.</Text>

        </View>

        <View >
          <Image
            style={styles.imagePaulo}
            source={require('../../../assets/Paulo.jpeg')} />
          <Text style={styles.textPaulo}><Text style={{ fontWeight: 'bold' }}>Paulo Gustavo</Text> é aquele cara que vive no mundo da tecnologia 24 horas por dia, 7 dias por semana. Ele respira bits e bytes, navegando por esse oceano de códigos como um verdadeiro capitão destemido. Para ele, cada linha de código é como uma peça de quebra-cabeça que ele ama montar. Sua paixão pela tecnologia é tão grande que faz até o impossível parecer possível.</Text>
        </View>

        <View style={styles.contentRayane}>
          <Image
            style={styles.imageRayane}
            source={require('../../../assets/Rayane.jpeg')} />
            <Text tyle={{...styles.textRayane}}><Text style={{ fontWeight: 'bold' }}>Rayane</Text>, a menina dos sistemas! Ela é como aquela peça-chave em um jogo de quebra-cabeça: dedicada, focada e sempre pronta para decifrar novos desafios. Está há um ano imersa no mundo da análise e desenvolvimento de sistemas, absorvendo conhecimento como uma esponja. Apesar de só ter um ano de experiência, sua paixão por códigos e algoritmos é palpável. </Text>
        </View>

        <View>
          <Image
            style={styles.imageThadeu}
            source={require('../../../assets/Thadeu.jpeg')} />
            <Text style={styles.textThadeu}><Text style={{ fontWeight: 'bold' }}>Thadeu</Text> é aquele cara que não cansa de se reinventar. Depois de se formar em engenharia de produção e aprender a otimizar processos, ele decidiu encarar um novo desafio: mergulhar de cabeça no universo do desenvolvimento fullstack no Serratec. Com um olhar analítico e a mente inquieta, ele viu nessa oportunidade a chance de expandir seus horizontes e mergulhar fundo no mundo da programação.</Text>
        </View>

        <View style={styles.contentWallace}>
          <Image
            style={styles.imageWallace}
            source={require('../../../assets/Wallace.jpg')} />
          <Text style={styles.textWallace}><Text style={{ fontWeight: 'bold' }}>Wallace</Text> é aquele cara que está expandindo seus horizontes a passos largos. Com um currículo já cheio de conquistas, do bacharelado em Administração à pós-graduação em gestão e marketing esportivo, ele decidiu mergulhar de cabeça em uma nova aventura: está encarando o curso de fullstack no Serratec. Surpreendentemente, Wallace nunca teve contato com tecnologia antes disso, mas isso não o impede de abraçar esse novo desafio com entusiasmo. </Text>
        </View>
      </ScrollView>
    </View>


  )
}

export default Perfil