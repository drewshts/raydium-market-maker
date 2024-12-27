import * as SPL from '@solana/spl-token';
import { Connection } from '@solana/web3.js';
import config from './config.json' assert { type: 'json' };
import autoTx from './src/autoTx.js';
import { calculateVolumeAndCost, calculateVolumeAndCost2 } from './src/calc.js';
import chalk from 'chalk';
import Table from 'cli-table3';
import readline from 'readline';

function displayMainMenu() {
    const table = new Table({
        head: ['Option', 'Action', 'Description'],
        colWidths: [10, 30, 70],
    });

    table.push(
        ['1', 'Start Dex Trending', 'Perform up to 8 unique buy-and-sell actions per transaction,\nensuring minimal loss while significantly boosting token volume\nand makers to increase the chance to be on trending spot.'],
        ['2', 'Volume Calculator', 'Calculate the total token volume based on user-specified\nparameters such as Min and Max buy in SOL,\nDesired Volume, and token exchange rate.'],
        ['3', 'Exit', 'Exit the program / CTRL + C to exit at any point.']
    );
    console.log(table.toString());
}

function displayVolCalcMenu() {
    const table = new Table({
        head: ['Option', 'Action', 'Description'],
        colWidths: [10, 30, 70],
    });

    table.push(
        ['1', '📊 CALCULATE BASED ON\nDESIRED VOLUME', 'Estimate required transactions and SOL usage based on minimum buy,\nmaximum buy, and the desired token volume in USD.'],
        ['2', '📊 CALCULATE BASED ON\nTOTAL SOL TO SPEND', 'Determine the token volume that can be generated based on\nminimum/maximum buy, and the total SOL available for transactions.'],
        ['3', 'Back to Main Menu', 'Return to the main menu.']
    );
    console.log(table.toString());
}

async function getUserInput(prompt) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    return new Promise((resolve) => {
        rl.question(prompt, (input) => {
            rl.close();
            resolve(input.trim());
        });
    });
    process.on('exit', () => rl.close());
}

async function handleVolCalcMenu() {
    while (true) {
        displayVolCalcMenu();
        const choice = await getUserInput('\nEnter your choice: ');

        switch (choice) {
            case '1':
                await calculateVolumeAndCost();
                break;

            case '2':
                await calculateVolumeAndCost2();
                break;

            case '3':
                return;

            default:
                console.log(chalk.red('Invalid selection. Please choose a valid option.'));
        }
    }
}

async function main() {
    while (true) {
        displayMainMenu();
        const choice = await getUserInput('\nEnter your choice: ');

        switch (choice) {
            case '1':
                console.log(chalk.green('\n---> MODE SELECTED <---'));
                console.log(chalk.hex('#FF9900')("🎉 RAYDIUM VOL/MAKER BOOSTER\n\n"));
                await autoTx();
                break;
            case '2':
                await handleVolCalcMenu();
                break;
            case '3':
                console.log(chalk.green('Exiting program.'));
                return;
            default:
                console.log(chalk.red('Invalid selection. Please choose a valid option.'));
        }
    }
}

export default displayMainMenu;
main();
