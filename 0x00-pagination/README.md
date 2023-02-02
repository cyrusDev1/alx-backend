0x00. Pagination
================

Back-end

-   Par : Emmanuel Turlay, ingénieur logiciel chez Cruise
-   Poids : 1
-   Projet terminé - a eu lieu du 19 janvier 2023 à 4 h 00 au 24 janvier 2023 à 4 h 00
-   Un examen automatique sera lancé à la date limite

#### En un mot...

-   **Examen QA automatique :** 0,0/15 obligatoire
-   **Au total : ** **0,0 %**
    -   Obligatoire : 0,0 %
    -   Facultatif : aucune tâche facultative

### Notions

*Pour ce projet, nous attendons de vous que vous examiniez ce concept :*

-   [Concepts back-end](https://intranet.alxswe.com/concepts/557)

![](https://s3.amazonaws.com/alx-intranet.hbtn.io/uploads/medias/2019/12/3646eb02de6527ca5d83.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOUSBVO6H7D%2F20230202%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230202T122225Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=1968639f74c0264e03a758eb26b7d81db518436a59ad0ab3956148d72c1f5a07) ![](https://s3.amazonaws.com/alx-intranet.hbtn.io/uploads/medias/2019/12/746187b76bea1f46030e.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOUSBVO6H7D%2F20230202%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230202T122225Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=07cef58b5d25bcb2b70621f8e0e41767c46ec08e711caa3c4e4b714464c98f90) ![](https://s3.amazonaws.com/alx-intranet.hbtn.io/uploads/medias/2019/12/665ce871c2ecc66a8e71.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOUSBVO6H7D%2F20230202%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230202T122225Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=7e8737b4c39968586acedd5a451fe7241280c78e1af0a35dce0dc97076526757)

Ressources
----------

**A lire ou à regarder :**

-   [Conception d'API REST : Pagination](https://intranet.alxswe.com/rltoken/7Kdzi9CH1LdSfNQ4RaJUQw "Conception d'API REST : Pagination")
-   [HATÉOAS](https://intranet.alxswe.com/rltoken/tfzcEbTSdMYSYxsspJH_oA "HATÉOAS")

Objectifs d'apprentissage
-------------------------

À la fin de ce projet, vous êtes censé être capable d' [expliquer à n'importe qui](https://intranet.alxswe.com/rltoken/zQ78qQVUjaPExupXQpAaHw "expliquer à personne") , **sans l'aide de Google** :

-   Comment paginer un jeu de données avec des paramètres simples page et page_size
-   Comment paginer un jeu de données avec des métadonnées hypermédias
-   Comment paginer de manière résistante à la suppression

Exigences
---------

-   Tous vos fichiers seront interprétés/compilés sur Ubuntu 18.04 LTS en utilisant `python3`(version 3.7)
-   Tous vos fichiers doivent se terminer par une nouvelle ligne
-   La première ligne de tous vos fichiers doit être exactement`#!/usr/bin/env python3`
-   Un `README.md`fichier, à la racine du dossier du projet, est obligatoire
-   Votre code doit utiliser le `pycodestyle`style (version 2.5.*)
-   La longueur de vos fichiers sera testée en utilisant`wc`
-   Tous vos modules doivent avoir une documentation ( `python3 -c 'print(__import__("my_module").__doc__)'`)
-   Toutes vos fonctions doivent avoir une documentation (`python3 -c 'print(__import__("my_module").my_function.__doc__)'`
-   Une documentation n'est pas un simple mot, c'est une vraie phrase expliquant à quoi sert le module, la classe ou la méthode (la longueur de celle-ci sera vérifiée)
-   Toutes vos fonctions et coroutines doivent être annotées par type.

Installer:`Popular_Baby_Names.csv`
----------------------------------

[utilisez ce fichier de données](https://intranet.alxswe.com/rltoken/NBLY6mdKDBR9zWvNADwjjg "utiliser ce fichier de données") pour votre projet

Tâches
------

### 0\. Fonction d'assistance simple

obligatoire

Note : 0,0 % ( Vérifications effectuées : 0,0 % )

Écrivez une fonction nommée `index_range`qui prend deux arguments entiers `page`et `page_size`.

La fonction doit renvoyer un tuple de taille deux contenant un index de début et un index de fin correspondant à la plage d'index à renvoyer dans une liste pour ces paramètres de pagination particuliers.

Les numéros de page sont indexés à 1, c'est-à-dire que la première page est la page 1.

```
bob@dylan:~$ cat 0-main.py
#!/usr/bin/env python3
"""
Main file
"""

index_range = __import__('0-simple_helper_function').index_range

res = index_range(1, 7)
print(type(res))
print(res)

res = index_range(page=3, page_size=15)
print(type(res))
print(res)

bob@dylan:~$ ./0-main.py
<class 'tuple'>
(0, 7)
<class 'tuple'>
(30, 45)
bob@dylan:~$

```

**Dépôt :**

-   Référentiel GitHub :`alx-backend`
-   Annuaire:`0x00-pagination`
-   Dossier:`0-simple_helper_function.py`

 Terminé ? Aider Vérifiez votre code Demander une nouvelle correction Obtenir un bac à sable Examen de l'assurance qualité

### 1\. Pagination simplifiée

obligatoire

Note : 0,0 % ( Vérifications effectuées : 0,0 % )

Copiez `index_range`la tâche précédente et la classe suivante dans votre code

```
import csv
import math
from typing import List

class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
            pass

```

Implémentez une méthode nommée `get_page`qui prend deux arguments entiers `page`avec la valeur par défaut 1 et `page_size`avec la valeur par défaut 10.

-   Vous devez utiliser ce [fichier CSV](https://intranet.alxswe.com/rltoken/NBLY6mdKDBR9zWvNADwjjg "Fichier CSV") (le même que celui présenté en haut du projet)
-   Utilisez `assert`pour vérifier que les deux arguments sont des entiers supérieurs à 0.
-   Utilisez `index_range`pour trouver les index corrects pour paginer correctement l'ensemble de données et renvoyer la page appropriée de l'ensemble de données (c'est-à-dire la bonne liste de lignes).
-   Si les arguments d'entrée sont hors limites pour l'ensemble de données, une liste vide doit être renvoyée.

```
bob@dylan:~$  wc -l Popular_Baby_Names.csv
19419 Popular_Baby_Names.csv
bob@dylan:~$
bob@dylan:~$ head Popular_Baby_Names.csv
Year of Birth,Gender,Ethnicity,Child's First Name,Count,Rank
2016,FEMALE,ASIAN AND PACIFIC ISLANDER,Olivia,172,1
2016,FEMALE,ASIAN AND PACIFIC ISLANDER,Chloe,112,2
2016,FEMALE,ASIAN AND PACIFIC ISLANDER,Sophia,104,3
2016,FEMALE,ASIAN AND PACIFIC ISLANDER,Emma,99,4
2016,FEMALE,ASIAN AND PACIFIC ISLANDER,Emily,99,4
2016,FEMALE,ASIAN AND PACIFIC ISLANDER,Mia,79,5
2016,FEMALE,ASIAN AND PACIFIC ISLANDER,Charlotte,59,6
2016,FEMALE,ASIAN AND PACIFIC ISLANDER,Sarah,57,7
2016,FEMALE,ASIAN AND PACIFIC ISLANDER,Isabella,56,8
bob@dylan:~$
bob@dylan:~$  cat 1-main.py
#!/usr/bin/env python3
"""
Main file
"""

Server = __import__('1-simple_pagination').Server

server = Server()

try:
    should_err = server.get_page(-10, 2)
except AssertionError:
    print("AssertionError raised with negative values")

try:
    should_err = server.get_page(0, 0)
except AssertionError:
    print("AssertionError raised with 0")

try:
    should_err = server.get_page(2, 'Bob')
except AssertionError:
    print("AssertionError raised when page and/or page_size are not ints")

print(server.get_page(1, 3))
print(server.get_page(3, 2))
print(server.get_page(3000, 100))

bob@dylan:~$
bob@dylan:~$ ./1-main.py
AssertionError raised with negative values
AssertionError raised with 0
AssertionError raised when page and/or page_size are not ints
[['2016', 'FEMALE', 'ASIAN AND PACIFIC ISLANDER', 'Olivia', '172', '1'], ['2016', 'FEMALE', 'ASIAN AND PACIFIC ISLANDER', 'Chloe', '112', '2'], ['2016', 'FEMALE', 'ASIAN AND PACIFIC ISLANDER', 'Sophia', '104', '3']]
[['2016', 'FEMALE', 'ASIAN AND PACIFIC ISLANDER', 'Emily', '99', '4'], ['2016', 'FEMALE', 'ASIAN AND PACIFIC ISLANDER', 'Mia', '79', '5']]
[]
bob@dylan:~$

```

**Dépôt :**

-   Référentiel GitHub :`alx-backend`
-   Annuaire:`0x00-pagination`
-   Dossier:`1-simple_pagination.py`

 Terminé ? Aider Vérifiez votre code Demander une nouvelle correction Obtenir un bac à sable Examen de l'assurance qualité

### 2\. Pagination hypermédia

obligatoire

Note : 0,0 % ( Vérifications effectuées : 0,0 % )

Répliquez le code de la tâche précédente.

Implémentez une `get_hyper`méthode qui prend les mêmes arguments (et valeurs par défaut) que `get_page`et renvoie un dictionnaire contenant les paires clé-valeur suivantes :

-   `page_size`: la longueur de la page de jeu de données renvoyée
-   `page`: le numéro de la page courante
-   `data`: la page du jeu de données (équivalent au retour de la tâche précédente)
-   `next_page`: numéro de la page suivante, `None`si pas de page suivante
-   `prev_page`: numéro de la page précédente, `None`si pas de page précédente
-   `total_pages`: le nombre total de pages dans le jeu de données sous forme d'entier

Assurez-vous de les réutiliser `get_page`dans votre implémentation.

Vous pouvez utiliser le `math`module si nécessaire.

```
bob@dylan:~$ cat 2-main.py
#!/usr/bin/env python3
"""
Main file
"""

Server = __import__('2-hypermedia_pagination').Server

server = Server()

print(server.get_hyper(1, 2))
print("---")
print(server.get_hyper(2, 2))
print("---")
print(server.get_hyper(100, 3))
print("---")
print(server.get_hyper(3000, 100))

bob@dylan:~$
bob@dylan:~$ ./2-main.py
{'page_size': 2, 'page': 1, 'data': [['2016', 'FEMALE', 'ASIAN AND PACIFIC ISLANDER', 'Olivia', '172', '1'], ['2016', 'FEMALE', 'ASIAN AND PACIFIC ISLANDER', 'Chloe', '112', '2']], 'next_page': 2, 'prev_page': None, 'total_pages': 9709}
---
{'page_size': 2, 'page': 2, 'data': [['2016', 'FEMALE', 'ASIAN AND PACIFIC ISLANDER', 'Sophia', '104', '3'], ['2016', 'FEMALE', 'ASIAN AND PACIFIC ISLANDER', 'Emma', '99', '4']], 'next_page': 3, 'prev_page': 1, 'total_pages': 9709}
---
{'page_size': 3, 'page': 100, 'data': [['2016', 'FEMALE', 'BLACK NON HISPANIC', 'Londyn', '14', '39'], ['2016', 'FEMALE', 'BLACK NON HISPANIC', 'Amirah', '14', '39'], ['2016', 'FEMALE', 'BLACK NON HISPANIC', 'McKenzie', '14', '39']], 'next_page': 101, 'prev_page': 99, 'total_pages': 6473}
---
{'page_size': 0, 'page': 3000, 'data': [], 'next_page': None, 'prev_page': 2999, 'total_pages': 195}
bob@dylan:~$

```

**Dépôt :**

-   Référentiel GitHub :`alx-backend`
-   Annuaire:`0x00-pagination`
-   Dossier:`2-hypermedia_pagination.py`

 Terminé ? Aider Vérifiez votre code Demander une nouvelle correction Obtenir un bac à sable Examen de l'assurance qualité

### 3\. Pagination hypermédia résistante à la suppression

obligatoire

Note : 0,0 % ( Vérifications effectuées : 0,0 % )

Le but ici est que si entre deux requêtes, certaines lignes sont supprimées du jeu de données, l'utilisateur ne manque pas d'éléments du jeu de données lors du changement de page.

Commencez `3-hypermedia_del_pagination.py`avec ce code :

```
#!/usr/bin/env python3
"""
Deletion-resilient hypermedia pagination
"""

import csv
import math
from typing import List

class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None
        self.__indexed_dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def indexed_dataset(self) -> Dict[int, List]:
        """Dataset indexed by sorting position, starting at 0
        """
        if self.__indexed_dataset is None:
            dataset = self.dataset()
            truncated_dataset = dataset[:1000]
            self.__indexed_dataset = {
                i: dataset[i] for i in range(len(dataset))
            }
        return self.__indexed_dataset

    def get_hyper_index(self, index: int = None, page_size: int = 10) -> Dict:
            pass

```

Implémentez une `get_hyper_index`méthode avec deux arguments entiers : `index`avec une `None`valeur par défaut et `page_size`avec une valeur par défaut de 10.

-   La méthode doit renvoyer un dictionnaire avec les paires clé-valeur suivantes :
    -   `index`: l'index de début actuel de la page de retour. C'est l'index du premier élément de la page en cours. Par exemple, si vous demandez la page 3 avec `page_size`20 et qu'aucune donnée n'a été supprimée de l'ensemble de données, l'index actuel doit être 60.
    -   `next_index`: le prochain index avec lequel interroger. Cela devrait être l'index du premier élément après le dernier élément de la page en cours.
    -   `page_size`: la taille actuelle de la page
    -   `data`: la page réelle du jeu de données

**Exigences/Comportement** :

-   Utilisez `assert`pour vérifier que `index`se trouve dans une plage valide.
-   Si l'utilisateur interroge les index 0, `page_size`10, il obtiendra les lignes indexées de 0 à 9 incluses.
-   S'il demande l'index suivant (10) avec `page_size`10, mais que les lignes 3, 6 et 7 ont été supprimées, l'utilisateur devrait toujours recevoir les lignes indexées 10 à 19 incluses.

```
bob@dylan:~$ cat 3-main.py
#!/usr/bin/env python3
"""
Main file
"""

Server = __import__('3-hypermedia_del_pagination').Server

server = Server()

server.indexed_dataset()

try:
    server.get_hyper_index(300000, 100)
except AssertionError:
    print("AssertionError raised when out of range")

index = 3
page_size = 2

print("Nb items: {}".format(len(server._Server__indexed_dataset)))

# 1- request first index
res = server.get_hyper_index(index, page_size)
print(res)

# 2- request next index
print(server.get_hyper_index(res.get('next_index'), page_size))

# 3- remove the first index
del server._Server__indexed_dataset[res.get('index')]
print("Nb items: {}".format(len(server._Server__indexed_dataset)))

# 4- request again the initial index -> the first data retreives is not the same as the first request
print(server.get_hyper_index(index, page_size))

# 5- request again initial next index -> same data page as the request 2-
print(server.get_hyper_index(res.get('next_index'), page_size))

bob@dylan:~$
bob@dylan:~$ ./3-main.py
AssertionError raised when out of range
Nb items: 19418
{'index': 3, 'data': [['2016', 'FEMALE', 'ASIAN AND PACIFIC ISLANDER', 'Emma', '99', '4'], ['2016', 'FEMALE', 'ASIAN AND PACIFIC ISLANDER', 'Emily', '99', '4']], 'page_size': 2, 'next_index': 5}
{'index': 5, 'data': [['2016', 'FEMALE', 'ASIAN AND PACIFIC ISLANDER', 'Mia', '79', '5'], ['2016', 'FEMALE', 'ASIAN AND PACIFIC ISLANDER', 'Charlotte', '59', '6']], 'page_size': 2, 'next_index': 7}
Nb items: 19417
{'index': 3, 'data': [['2016', 'FEMALE', 'ASIAN AND PACIFIC ISLANDER', 'Emily', '99', '4'], ['2016', 'FEMALE', 'ASIAN AND PACIFIC ISLANDER', 'Mia', '79', '5']], 'page_size': 2, 'next_index': 6}
{'index': 5, 'data': [['2016', 'FEMALE', 'ASIAN AND PACIFIC ISLANDER', 'Mia', '79', '5'], ['2016', 'FEMALE', 'ASIAN AND PACIFIC ISLANDER', 'Charlotte', '59', '6']], 'page_size': 2, 'next_index': 7}
bob@dylan:~$

```

**Dépôt :**

-   Référentiel GitHub :`alx-backend`
-   Annuaire:`0x00-pagination`
-   Dossier:`3-hypermedia_del_pagination.py`

 Terminé ? Aider Vérifiez votre code Demander une nouvelle correction Obtenir un bac à sable