import { test, expect } from '@playwright/test';
import console from 'node:console';

test('test1@sanity', async ({ page }) => {
  
    console.log("this is sanity 1 test")
});

test('test3@reg', async ({ page }) => {
  
    console.log("this is regression 3 test")
});

test('test2@sanity', async ({ page }) => {
  
    console.log("this is sanity 2 test")
});