import { Pressable, ScrollView, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';
import { ImagesAssets } from '../../../assets/ImagesAssets';


const index = () => {
  const todo = [];
  return (
    <>
    <View style = {{
      marginHorizontal :10,
      marginVertical: 10,
      flexDirection:'row',
      alignItems: 'center',
      gap : 12,
    }}>
      <Pressable style = {{
        backgroundColor: "#7CB9E8",
        paddingHorizontal: 10,
        paddingVertical: 6,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
      }} >
        <Text style = {{
          color: "#fff",
          fontWeight: "bold",
          fontSize: 16,
          textAlign: 'center',
        }}>
          All
        </Text>
      </Pressable>
      <Pressable style = {{
        backgroundColor: "#7CB9E8",
        paddingHorizontal: 10,
        paddingVertical: 6,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
      }} >
        <Text style = {{
          color: "#fff",
          fontWeight: "bold",
          fontSize: 16,
          textAlign: 'center',
        }}>
          Work
        </Text>
      </Pressable>
      <Pressable style = {{
        backgroundColor: "#7CB9E8",
        paddingHorizontal: 10,
        paddingVertical: 6,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
      }} >
        <Text style = {{
          color: "#fff",
          fontWeight: "bold",
          fontSize: 16,
          textAlign: 'center',
        }}>
          Personal
        </Text>
      </Pressable>
      <Pressable style = {{
        paddingHorizontal: 10,
        paddingVertical: 6,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft : 'auto',
      }} >
       <Entypo name="circle-with-plus" size={35} color="#7CB9E8" />
      </Pressable>
    </View>
    <ScrollView style = {{
      flex: 1,
      backgroundColor: "#fff",
    }}>
      <View style = {{padding:10}}>
        {
          todo?.length > 0 ? (
            <View>
              
            </View>
          ) : (
            <View style = {{
              flex: 1,
              justifyContent: 'center',
              alignItem: 'center',
              marginTop: 50,
              marginLeft: 'auto',
              marginRight:'auto',

            }} >
              <Image
              style = {{
                width: 400,
                height: 350,
                alignItems: 'center',
              }}
               source={
                ImagesAssets.todoImg
               } />
              <Text
              style = {{
                fontSize: 20,
                fontWeight: "bold",
                textAlign: 'center',
              }}
              >
                No Task for Today! Add a task.
              </Text>
              <Pressable style = {{
        paddingHorizontal: 10,
        paddingVertical: 6,
        alignItems: 'center',
        justifyContent: 'center',
      }} >
       <Entypo name="circle-with-plus" size={35} color="#7CB9E8" />
      </Pressable>
            </View>
          )
        }
      </View>
    </ScrollView>
    </>
  )
}

export default index

const styles = StyleSheet.create({})