#!/usr/bin/env python3
"""Write a function named index_range that
takes two integer arguments page and page_size."""


def index_range(page: int, page_size: int) -> tuple:
    """return tuple"""
    start = (page * page_size) - page_size
    end = page * page_size
    return (start, end,)
