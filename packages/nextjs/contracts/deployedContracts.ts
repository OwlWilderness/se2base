/**
 * This file is autogenerated by Scaffold-ETH.
 * You should not edit it manually or your changes might be overwritten.
 */
import { GenericContractsDeclaration } from "~~/utils/scaffold-eth/contract";

const deployedContracts = {
  31337: {
    BasicMath: {
      address: "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512",
      abi: [
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_a",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "_b",
              type: "uint256",
            },
          ],
          name: "adder",
          outputs: [
            {
              internalType: "uint256",
              name: "sum",
              type: "uint256",
            },
            {
              internalType: "bool",
              name: "error",
              type: "bool",
            },
          ],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_a",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "_b",
              type: "uint256",
            },
          ],
          name: "subtractor",
          outputs: [
            {
              internalType: "uint256",
              name: "difference",
              type: "uint256",
            },
            {
              internalType: "bool",
              name: "error",
              type: "bool",
            },
          ],
          stateMutability: "pure",
          type: "function",
        },
      ],
      inheritedFunctions: {},
    },
  },
  84532: {
    BasicMath: {
      address: "0x3466DE9Ec4db79B75Dcd2bFad13Bbb145105e56c",
      abi: [
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_a",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "_b",
              type: "uint256",
            },
          ],
          name: "adder",
          outputs: [
            {
              internalType: "uint256",
              name: "sum",
              type: "uint256",
            },
            {
              internalType: "bool",
              name: "error",
              type: "bool",
            },
          ],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_a",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "_b",
              type: "uint256",
            },
          ],
          name: "subtractor",
          outputs: [
            {
              internalType: "uint256",
              name: "difference",
              type: "uint256",
            },
            {
              internalType: "bool",
              name: "error",
              type: "bool",
            },
          ],
          stateMutability: "pure",
          type: "function",
        },
      ],
      inheritedFunctions: {},
    },
  },
} as const;

export default deployedContracts satisfies GenericContractsDeclaration;
