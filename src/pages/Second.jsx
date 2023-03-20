import React, { useState } from 'react'
import './second.css'
import { Document } from 'react-pdf'
import sapmePdf from '../assets/SamplePdf_477kb_1page.pdf'
import PopUp from '../components/PopUp'

function Second() {
const [popup , setpopup] = useState(true)
const [sign,setSign] = useState(true)

  let handleClose = () => {
    setpopup(!popup)
    setTimeout(change,3000)
  }
  const change = () => {
    setSign(!sign)
  }
  return (
    <div>
      <Document file={sapmePdf} />
      <p>A topic sentence is a precise statement that reflects the main idea of the paragraph. It should be carefully written as it will show the reader what you are going to talk about. Words chosen for this should not be cluttered and ambiguous as readers will decide to read further based on this. It is not necessary to write the topic sentence at the beginning of the paragraph. It can be put anywhere, as long as it reflects the main topic. For instance, if you mention that you are going to talk about the advantages of using the hand sanitizer, then in supporting sentence you should only talk about advantages, not the features or anything else. 


2. Supporting Sentences

Supporting sentences explain the topic sentence in detail. They expand the main topic and develops the main idea into the explanation. They explain the main topic using examples, facts, quotes, etc. They have to be related to the topic sentence.


There can be two types of Supporting sentences, First, The major supporting sentence; this sentence directly explains the main idea with some new fact or new idea. Second, a minor support sentence helps the major supporting sentence develop the controlling idea. 


3. Conclusion Sentence

A good concluding sentence brings a paragraph to a polished end. It may give a summary of the main topic, a concluding sentence also gives a final take on the topic and leaves the reader with complete information. 


A good conclusion can either be just reiterating the topic again or it could be concluded with a few main points which were not exclusively mentioned in the paragraph. 


What Makes a Paragraph Very Good 
A perfect and well-written paragraph comprises a key sentence, applicable supporting sentences, and a last (or transition) sentence. This structure is fundamental to maintaining your paragraph centred on the main concept and creating a clear and concise photo.


In order to add something interesting, and adding an interesting fact in your content does not necessarily follow the conventional paragraph structure, it’s more about scene building and continuing a story. Properly-written paragraphs are a staple of suitable flash fiction and short fiction writing, as short testimonies need to target a principal concept. When your sentences are unified and connected with other sentences, you can write a good paragraph.

 
Example of a Paragraph-
     


Example 2:

The uncommon and speedy increase in Earth’s average temperature is called global warming. This growth has extensively been higher within the last century due to human intervention with nature. The release of greenhouse gasses in the ecosystem has been one of the number one motives behind the boom in temperature. The multiplied intake of fossil fuels has extended the attention of greenhouse gasses. The effect of world Warming is a lot higher than just a sore in temperature.


It modifies the rainfall pattern, intensifies coastal erosion, lengthens seasons in line with geography, the glaciers and ice caps are melting and will increase the range of continual and infectious illnesses. As a way to expect similar weather changes, scientists constructed models. These climate fashions are used to simulate the interactional responses of the sea and environment. They predict a boom of round 2C to 6C with the aid of the 21st century.</p>
      <PopUp popup = {popup}  handleClose={handleClose} sign = {sign}/>
    </div>
  )
}

export default Second