#!/usr/bin/env python3
"""Write a function named index_range that
takes two integer arguments page and page_size."""
import csv
import math
from typing import List
index_range = __import__('0-simple_helper_function').index_range


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
        """return a page"""
        assert type(page) == int and type(page_size) == int
        assert page > 0 and page_size > 0
        _range = index_range(page, page_size)
        data = self.dataset()[_range[0]:_range[1]]
        return data
