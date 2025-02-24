import React from 'react';
import { ScrollView, StyleSheet, View, Image } from 'react-native';
import { Text, Card, Button } from 'react-native-elements';


const CATEGORIA = [
  {
    title: 'Tecnologia',
    books: [
      { title: 'JavaScript Básico', image: 'https://lh3.googleusercontent.com/pw/AP1GczNJG43c49Ce5pPf0ef7bRlfEwv4z8CgSyDlErutdGI6_d9dtd-RUEkxhQHIez0yp1xeAPsYtMyKJ0VdLBjtFpK4rceGE2xmVTdm4cc-p40IoNbLkSmAiNDlGqXwVIRqplo5hDM_xSY6ADn7KVK-eVrz=w574-h888-s-no-gm?authuser=3' },
      { title: 'React Native Avançado', image: 'https://lh3.googleusercontent.com/pw/AP1GczPteKDEGDJIKTv6RmMvveFOvJWCzI0ASQ8xvZv6o2D6mTPdwkBmD3FORoAOmJulQETP4QRoD_td8a3ZJkKpdbW3642B7sowCoYllQ8mWf_HGuORlfSApWUbtGj4R--I2PIeZPLzb1-vSJoQ3jgScST-=w195-h259-s-no-gm?authuser=3' },
      { title: 'Python para Iniciantes', image: 'https://lh3.googleusercontent.com/pw/AP1GczPN28LC35WFassIiG4zUsp0sGTAieOlUmg08p1jIrQjYbAf6xHkFquh6xZ9gKLl86Xt-lNQpj1MwZ3mu45MBTq0XQGmuR0vYRl1MjO6o3motkjTkaY7weSKAO5JG7ZEXENyacIwi6S1uOP46PU919sU=w190-h265-s-no-gm?authuser=3' }
    ]
  },
  {
    title: 'Ficção Científica',
    books: [
      { title: 'Duna', image: 'https://lh3.googleusercontent.com/pw/AP1GczMRN-c-gGeIbPKPyWx_o5CqRBBJ1UFox9IjN01J8a2q59YYksDMCcg9t8Pw1HWE-pH89gSwjD66al56Gp6ZQMVJeAmdh_Frj76uFJsBAAibLArb8OAQiXkX52NZLq5LI9HLjZwR_uxe7HnnkP3UUGa1=w187-h269-s-no-gm?authuser=3' },
      { title: 'Neuromancer', image: 'https://lh3.googleusercontent.com/pw/AP1GczNoRpqkWO0pkv83SEumK5HbpMF0amkrKz4tMTu3wNAQ_qURDTIGmxjx7stRRSfDSI9hhpLN81FmDilNv47E9-dyKRIH6YiFHkS2Rl271l_t0jIYoI-UOG_HS3WVMT40AK-xrP9TQikcDzxVHMdgtNOe=w183-h275-s-no-gm?authuser=3' },
      { title: 'Fundação', image: 'https://lh3.googleusercontent.com/pw/AP1GczNE27QIZQgJrgqqezo5WY_XIpr4BAcZOD7aT6PUMrx8sco7ixvzjFcvvxtOAk0bhIUznXFqfn0KGALMzixSE2Y-88FxAhsCSNoJv6cs3ZdAsAgF8iB3o2_oDJmjBakuEsBSeCHcDWKpg9Q5M6olIzdk=w183-h275-s-no-gm?authuser=3' }
    ]
  },
  {
    title: 'Literatura Clássica',
    books: [
      { title: 'Dom Quixote', image: 'https://lh3.googleusercontent.com/pw/AP1GczPlXI1atN9k4lLIp6g1IIFzbd-8LB5zNnKWxByH7JesBwJlfjrIF_rO5RGk2GNOWM_Meu5yEY2tQJetCVpVt6TqgwlKiAfzbBxjZb_Jubtavftf2IGEFJxbaeMt6HjDMfWCkR-J77gIB0F0uwJ1n3wF=w188-h268-s-no-gm?authuser=3' },
      { title: '1984', image: 'https://lh3.googleusercontent.com/pw/AP1GczMwwWSx9cRcsZegHLBWO-U6UAeRcBHOZcWK4hDyFtXYyTodUE7kLTLBfwBkDHgjDoU2SesiNyNn2gdoAUgo9fkowCMvLYYX6NbjDiLnLC821BLqoCuyhJBX0vzX5g3npYm6NUmMaAykWgD_IksWDKIV=w186-h271-s-no-gm?authuser=3' },
      { title: 'Moby Dick', image: 'https://lh3.googleusercontent.com/pw/AP1GczMKTa8KDkWD2sziH37o9Y6PIlaxY3TKq81GP3pVHjwbGi1vXwGDuuVJ4cGe_D3uQXdEc-7-MjOxoaBrMUZfIz3NEzh8BiLUcYIHnKR5hRuG1XcSfrBG2pSZYJpVQ4W8oU6hKBDR1-NSbcDUal1xutsM=w193-h261-s-no-gm?authuser=3' }
    ]
  },
  {
    title: 'Biografias',
    books: [
      { title: 'Steve Jobs', image: 'https://lh3.googleusercontent.com/pw/AP1GczOkAPloCsExq9GYl8ReyYdoWaG8JEhpNFO-5_lHnLAn19uAOGf9JWEFr8UKdIuj-WuFRtekJUUrkGHDEw3dburuxEMAqb09d81fbeED3uB1GyzHiVHGpRwh9gOsAkcKv0VLENnBGhwQuLuQtuWQUVOD=w191-h264-s-no-gm?authuser=3' },
      { title: 'Elon Musk', image: 'https://lh3.googleusercontent.com/pw/AP1GczNBE7VqCvRtTN2xp-W-5wbC6gup82ExxFejiTuloxsSM6c-MIGhl_VNKZ7uwG1shPbdOdkIrMF_ZQidWfo3NYq-Q4zinSbKjskDYEk5Kgqgu9dJ9BLTp_Jx3ey-RBLqPzbjigMzANcxVqBZ5O0KYzZT=w183-h276-s-no-gm?authuser=3' },
      { title: 'Marie Curie', image: 'https://lh3.googleusercontent.com/pw/AP1GczMTv42v3UoZ22az8u1cXcE8oL0QQ1sIsUmKzpSpomRl8E3PTapNDgHAlDCIeHRIXdKPjtVMfDXvPBDEFoKc2_g-ufeK2HmTLs81FVDKFLF_6UT2HaUnEPOhbqPdd1QM62jYYPQf-HVlvpUoVC_kpVyT=w178-h283-s-no-gm?authuser=3' }
    ]
  }
];

const Home = () => {
  return (
    <ScrollView style={styles.container}>
      {CATEGORIA.map((category, index) => (
        <View key={index}>
          <Text style={styles.categoryTitle}>{category.title}</Text>
          <ScrollView horizontal>
            {category.books.map((book, index) => (
              <Card key={index} containerStyle={styles.card}>
                {/* Carregando imagem  */}
                <Image 
                  source={{ uri: book.image }} 
                  style={styles.bookImage} 
                />
                <Card.Title>{book.title}</Card.Title>
                <Button title="Ver Mais" />
              </Card>
            ))}
          </ScrollView>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 10,
    paddingHorizontal: 10
  },
  categoryTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10
  },
  card: {
    width: 150,
    padding: 0,
    marginRight: 10
  },
  bookImage: {
    height: 200,
    width: '100%',
    resizeMode: 'cover'
  }
});

export default Home;
