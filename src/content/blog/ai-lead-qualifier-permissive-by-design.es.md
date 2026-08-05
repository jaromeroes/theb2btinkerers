---
title: "Construí una IA que califica leads. La mejor decisión fue dejar que dijera que sí demasiadas veces."
description: "Historia en primera persona de un clasificador de ICP con IA: por qué conviene que sea permisivo, por qué la etiqueta de tu base de datos miente y por qué el criterio va en prosa."
excerpt: "Casi todo el mundo construye la versión estricta y borra su propio pipeline sin enterarse. Un falso negativo es invisible y permanente. Un falso positivo cuesta una llamada. Esa asimetría lo cambia todo."
slug: "clasificador-icp-con-ia-permisivo-por-diseno"
author: "The B2B Tinkerers"
date: 2026-10-22
tag: "IA y Marketing"
readTime: "7 min de lectura"
image: "../../assets/blog/ai-qualifier-cover.webp"
lang: "es"
translationKey: "ai-qualifier-permissive"
---

En algún sitio de la oficina, normalmente el SDR más nuevo o quien perdió la discusión, alguien está peleándose con un Excel. Unos cientos de filas, cada una una empresa, sacadas de una base de datos de contactos porque alguien aplicó un filtro. Su trabajo es leer esas filas de una en una y decidir qué empresas merecen una llamada.

Abrir la web. Entrecerrar los ojos. Adivinar, y pasar a la siguiente fila.

Ahí es donde la calificación de leads con IA se gana el sueldo de verdad, y ahí es también donde el outbound se muere en silencio. No en el pitch, no en la secuencia. En las dos horas semanales que nadie quiere dedicar a comprobar si una lista de empresas tiene algo que ver con tu ICP.

Llevo un tiempo trabajando como fractional CMO para una plataforma SaaS B2B de logística industrial. Venden a fabricantes de mid-market, a través de un micro-comité de logística, IT y compras, con un motion puramente outbound. Sin red de inbound que recoja los errores. Si la lista está mal, el trimestre está mal.

El proceso manual tenía los tres problemas de siempre. Era lento. Era inconsistente, porque dos personas calificaban la misma empresa de forma distinta, y la misma persona calificaba distinto un viernes a las 18:00 que un martes a las 10:00. Y no terminaba nunca. Se abandonaba cada vez que aparecía algo más urgente, que es el fallo de verdad. No es calificar mal. Es no calificar.

Así que construí un script pequeño. Lo que hace que funcione no es el código ni el modelo, sino tres decisiones de diseño, y una de ellas suena a error.

## Qué hace exactamente

Para cada empresa de la lista, el script le pide a un modelo frontera con búsqueda web que vaya a averiguar qué hace esa empresa *de verdad*, en el mundo real. No lo que dice la base de datos. Lo que hace. Después lo clasifica contra el modelo de ICP y escribe una fila en una hoja de cálculo: el veredicto, el razonamiento, las fuentes que consultó y una nota para el comercial que va a hacer la llamada.

Guarda un checkpoint después de cada empresa, así que si la ejecución se cae en la empresa 63 de 100, retoma en la 64 en vez de empezar de cero. Detalle aburrido, te salva la tarde.

Y ya está. No es un enjambre de agentes. No es una plataforma. Es un bucle, un prompt y un CSV.

## Decisión 1: dice que sí demasiadas veces, a propósito

![Una forma que se desvanece en silencio hasta desaparecer mientras otra rebota en una barrera y sigue su camino](../../assets/blog/ai-qualifier-01.webp)

Esta es la decisión que más defendería, y la primera que todo el mundo discute.

Cuando la evidencia es ambigua, el clasificador responde **sí**. No se escaquea, no se abstiene, no deja la empresa en un cajón de "quizá" que nadie abre jamás. Dice que sí, y añade una nota diciéndole al comercial exactamente qué tiene que verificar en la llamada.

Eso no es dejadez. Es aritmética sobre el coste de equivocarse.

Piensa en lo que te cuesta cada error. Un falso positivo significa que un comercial hace una llamada que no va a ningún sitio. Molesto, visible y resuelto en quince minutos. Alguien te lo va a contar, probablemente ese mismo día.

Un falso negativo te cuesta un cliente, y nunca vas a saber que pasó. Esa empresa desaparece de tu mundo en silencio. No sale en ningún informe. Nadie se queja. No está en un montón de descartes que puedas revisar, porque el sentido de descartarla era precisamente no volver a mirarla. El error es invisible y es permanente.

Esas dos cosas no tienen el mismo tamaño, y aun así casi todo el mundo construye como si lo tuvieran. El instinto es hacer el clasificador estricto, porque un clasificador estricto parece riguroso. Te da una lista limpia. Parece criterio. Y lo que está haciendo en realidad es borrarte el pipeline de una forma que no aparece en ningún dashboard, así que te sientes preciso mientras tu mercado alcanzable encoge en silencio.

El modelo mental al que vuelvo siempre: **el humano es el filtro, la máquina es el embudo.** El trabajo de la máquina es ser ancha, barata e incansable. El trabajo del comercial es ser quien decide, en la llamada, con un humano al otro lado. Si le pides a la máquina que decida, has puesto tu juicio más importante en la parte del sistema que no puede hacer una repregunta.

Así que cuando el modelo no lo tiene claro, dice que sí y dice *esto es lo que no he podido determinar*. La ambigüedad pasa hacia delante, a la persona que puede resolverla, en vez de resolverse con una suposición dentro de un script.

## Decisión 2: la etiqueta miente

La segunda decisión sale de algo evidente sobre lo que nadie actúa: la etiqueta de industria de tu base de datos de contactos es ficción.

He visto a una base de datos etiquetar con toda su seguridad a un fabricante industrial como "Retail". No un caso raro, no una empresa extraña. Simplemente mal, ahí sentado en una columna, y todo el mundo confiando. Esa etiqueta viene de un scrapeo, o de un campo autodeclarado en un formulario, o de un sistema de categorías diseñado hace años para los intereses de otro. Es metadato sobre una empresa. No es la empresa.

Si filtras por ahí, heredas todos sus errores. Y los errores en un filtro no fallan con ruido. Fallan como ausencia.

Así que el clasificador no se fía de la etiqueta. Va y mira. Lee lo que la empresa dice de sí misma ahora mismo, en la web en vivo, y cita las fuentes que usó. Esa última parte importa más de lo que parece. La salida no es un veredicto, es un argumento con referencias adjuntas, lo que significa que un comercial que no esté de acuerdo puede abrir las fuentes y auditar el razonamiento en treinta segundos.

Una IA que te da un sí/no te está pidiendo fe. Una IA que te da un sí/no más su razonamiento te está dando algo auditable. Solo una de las dos sobrevive al contacto con un equipo de ventas, porque los equipos de ventas son escépticos por oficio, y hacen bien.

Califica contra la realidad, no contra el metadato.

## Decisión 3: el criterio vive en prosa, no en código

![Paneles de documento superpuestos y apilados en secuencia de versiones sobre una retícula plana](../../assets/blog/ai-qualifier-02.webp)

El modelo de ICP no vive dentro del script. Vive en un documento en lenguaje llano, un archivo de prompt, versionado como cualquier otro documento, escrito en frases que un humano puede leer.

Suena a detalle técnico. En realidad es el detalle político.

En el momento en que tu criterio de ICP se expresa como código, la propiedad del ICP se muda a quien sepa editar ese código. Marketing quiere afinar un criterio, marketing abre un ticket. Marketing espera. La definición de a quién le vendes, que es probablemente el juicio más importante de la empresa, ahora tiene una cola delante.

Cuando está en prosa, cambiar el criterio es editar un párrafo. Quien es dueño del ICP es dueño del archivo. Sin ticket, sin sprint, sin capa de traducción entre el pensamiento y el sistema. Ese archivo ya ha pasado por varias versiones a medida que el criterio se afinaba, y cada una de esas revisiones llevó minutos, porque afinar un ICP es un acto de marketing y debería sentirse como escribir, no como desplegar.

Si estás construyendo algo así, pon el juicio en lenguaje y deja el código tonto. El código es fontanería. El pensamiento tiene que ser legible por la persona que piensa. Es el mismo principio que hay detrás de casi todo el [trabajo de estrategia de IA](/es/services/ai-strategy) que hago: el apalancamiento no está en automatizar la decisión, está en poner la decisión donde el humano adecuado pueda alcanzarla.

## Lo que cuesta, y cómo sabremos si funciona

Los números de operación son poco glamurosos, que es justo el punto.

Cada empresa tarda entre 15 y 30 segundos y cuesta unos 0,03–0,05 € (0,03–0,06 $). Un lote de unas 100 empresas se procesa en 30 a 50 minutos por unos 4,50–7 € (5–8 $). Esa es toda la economía. Lo pagas con el presupuesto de café.

Ahora la parte honesta.

Todavía no te puedo decir que funcione. Pusimos un listón antes de empezar, que es el único orden que significa algo: acuerdo por encima del 85% contra un conjunto de referencia de 64 empresas clasificadas a mano. Esa validación sigue en marcha. No ha concluido. No tengo un número para ti, y si lo tuviera tan pronto deberías sospechar de él.

Te lo cuento porque la alternativa es lo que más me irrita de cómo se escribe sobre IA en marketing B2B. Alguien construye una herramienta, la describe con prosa segura, y deja que la ausencia de un listón declarado insinúe que lo superó. Lo que yo tengo es un diseño en el que creo y una prueba que no he terminado. No son lo mismo, y prefiero decirlo antes que rellenar esto con un número inventado.

Si pasa el 85%, se queda como opción por defecto. Si no, el archivo de prompt se lleva otra versión y volvemos a ejecutarlo. Ese es el bucle.

## El apalancamiento no era el modelo

Esto es lo que me gustaría que te llevaras.

El modelo que usé está disponible para cualquiera que lea esto, al mismo precio, hoy. Tu competidor lo tiene. Tu becario lo tiene. No hay ventaja en el modelo, y quien te venda una te está vendiendo acceso a algo que ya tienes.

La ventaja, si hay alguna aquí, está en tres decisiones que costaron una tarde de pensar y cero talento de ingeniería. Sé permisivo, porque tus errores no son simétricos. Verifica contra el mundo, porque tu base de datos te está mintiendo. Mantén el criterio en prosa, porque quien es dueño del juicio debería ser dueño del archivo.

Nada de eso es tecnología. Todo eso es criterio de marketing, aplicado a una herramienta que hará exactamente lo que le digas y no tiene ninguna opinión sobre si lo que le dijiste era inteligente.

---

*En The B2B Tinkerers ayudamos a equipos B2B a poner la IA donde de verdad genera apalancamiento, y a mantenerla lejos de las decisiones que necesitan un humano. Si quieres una segunda opinión sobre lo que estás construyendo, [hablemos](#contact). O mira cómo trabajamos como [fractional CMO](/es/services/fractional-cmo).*
