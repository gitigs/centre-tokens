/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { AbstractFiatTokenV1Contract } from "./AbstractFiatTokenV1";
import { AbstractFiatTokenV2Contract } from "./AbstractFiatTokenV2";
import { AdminUpgradeabilityProxyContract } from "./AdminUpgradeabilityProxy";
import { BlacklistableContract } from "./Blacklistable";
import { ContractThatCallsPublicFunctionsContract } from "./ContractThatCallsPublicFunctions";
import { ContractWithExternalFunctionsContract } from "./ContractWithExternalFunctions";
import { ContractWithPublicFunctionsContract } from "./ContractWithPublicFunctions";
import { DummyErc20Contract } from "./DummyErc20";
import { EcRecoverContract } from "./EcRecover";
import { Eip712Contract } from "./Eip712";
import { Eip712DomainContract } from "./Eip712Domain";
import { Erc20Contract } from "./Erc20";
import { FiatTokenProxyContract } from "./FiatTokenProxy";
import { FiatTokenUtilContract } from "./FiatTokenUtil";
import { FiatTokenV11Contract } from "./FiatTokenV11";
import { FiatTokenV1Contract } from "./FiatTokenV1";
import { FiatTokenV2Contract } from "./FiatTokenV2";
import { GasAbstractionContract } from "./GasAbstraction";
import { Ierc20Contract } from "./Ierc20";
import { MigrationsContract } from "./Migrations";
import { OwnableContract } from "./Ownable";
import { PausableContract } from "./Pausable";
import { PermitContract } from "./Permit";
import { ProxyContract } from "./Proxy";
import { RescuableContract } from "./Rescuable";
import { UpgradeabilityProxyContract } from "./UpgradeabilityProxy";
import { UpgradedFiatTokenContract } from "./UpgradedFiatToken";
import { UpgradedFiatTokenNewFieldsNewLogicTestContract } from "./UpgradedFiatTokenNewFieldsNewLogicTest";
import { UpgradedFiatTokenNewFieldsTestContract } from "./UpgradedFiatTokenNewFieldsTest";

declare global {
  namespace Truffle {
    interface Artifacts {
      require(name: "AbstractFiatTokenV1"): AbstractFiatTokenV1Contract;
      require(name: "AbstractFiatTokenV2"): AbstractFiatTokenV2Contract;
      require(
        name: "AdminUpgradeabilityProxy"
      ): AdminUpgradeabilityProxyContract;
      require(name: "Blacklistable"): BlacklistableContract;
      require(
        name: "ContractThatCallsPublicFunctions"
      ): ContractThatCallsPublicFunctionsContract;
      require(
        name: "ContractWithExternalFunctions"
      ): ContractWithExternalFunctionsContract;
      require(
        name: "ContractWithPublicFunctions"
      ): ContractWithPublicFunctionsContract;
      require(name: "DummyERC20"): DummyErc20Contract;
      require(name: "ECRecover"): EcRecoverContract;
      require(name: "EIP712"): Eip712Contract;
      require(name: "EIP712Domain"): Eip712DomainContract;
      require(name: "ERC20"): Erc20Contract;
      require(name: "FiatTokenProxy"): FiatTokenProxyContract;
      require(name: "FiatTokenUtil"): FiatTokenUtilContract;
      require(name: "FiatTokenV1_1"): FiatTokenV11Contract;
      require(name: "FiatTokenV1"): FiatTokenV1Contract;
      require(name: "FiatTokenV2"): FiatTokenV2Contract;
      require(name: "GasAbstraction"): GasAbstractionContract;
      require(name: "IERC20"): Ierc20Contract;
      require(name: "Migrations"): MigrationsContract;
      require(name: "Ownable"): OwnableContract;
      require(name: "Pausable"): PausableContract;
      require(name: "Permit"): PermitContract;
      require(name: "Proxy"): ProxyContract;
      require(name: "Rescuable"): RescuableContract;
      require(name: "UpgradeabilityProxy"): UpgradeabilityProxyContract;
      require(name: "UpgradedFiatToken"): UpgradedFiatTokenContract;
      require(
        name: "UpgradedFiatTokenNewFieldsNewLogicTest"
      ): UpgradedFiatTokenNewFieldsNewLogicTestContract;
      require(
        name: "UpgradedFiatTokenNewFieldsTest"
      ): UpgradedFiatTokenNewFieldsTestContract;
    }
  }
}

export {
  AbstractFiatTokenV1Contract,
  AbstractFiatTokenV1Instance
} from "./AbstractFiatTokenV1";
export {
  AbstractFiatTokenV2Contract,
  AbstractFiatTokenV2Instance
} from "./AbstractFiatTokenV2";
export {
  AdminUpgradeabilityProxyContract,
  AdminUpgradeabilityProxyInstance
} from "./AdminUpgradeabilityProxy";
export { BlacklistableContract, BlacklistableInstance } from "./Blacklistable";
export {
  ContractThatCallsPublicFunctionsContract,
  ContractThatCallsPublicFunctionsInstance
} from "./ContractThatCallsPublicFunctions";
export {
  ContractWithExternalFunctionsContract,
  ContractWithExternalFunctionsInstance
} from "./ContractWithExternalFunctions";
export {
  ContractWithPublicFunctionsContract,
  ContractWithPublicFunctionsInstance
} from "./ContractWithPublicFunctions";
export { DummyErc20Contract, DummyErc20Instance } from "./DummyErc20";
export { EcRecoverContract, EcRecoverInstance } from "./EcRecover";
export { Eip712Contract, Eip712Instance } from "./Eip712";
export { Eip712DomainContract, Eip712DomainInstance } from "./Eip712Domain";
export { Erc20Contract, Erc20Instance } from "./Erc20";
export {
  FiatTokenProxyContract,
  FiatTokenProxyInstance
} from "./FiatTokenProxy";
export { FiatTokenUtilContract, FiatTokenUtilInstance } from "./FiatTokenUtil";
export { FiatTokenV11Contract, FiatTokenV11Instance } from "./FiatTokenV11";
export { FiatTokenV1Contract, FiatTokenV1Instance } from "./FiatTokenV1";
export { FiatTokenV2Contract, FiatTokenV2Instance } from "./FiatTokenV2";
export {
  GasAbstractionContract,
  GasAbstractionInstance
} from "./GasAbstraction";
export { Ierc20Contract, Ierc20Instance } from "./Ierc20";
export { MigrationsContract, MigrationsInstance } from "./Migrations";
export { OwnableContract, OwnableInstance } from "./Ownable";
export { PausableContract, PausableInstance } from "./Pausable";
export { PermitContract, PermitInstance } from "./Permit";
export { ProxyContract, ProxyInstance } from "./Proxy";
export { RescuableContract, RescuableInstance } from "./Rescuable";
export {
  UpgradeabilityProxyContract,
  UpgradeabilityProxyInstance
} from "./UpgradeabilityProxy";
export {
  UpgradedFiatTokenContract,
  UpgradedFiatTokenInstance
} from "./UpgradedFiatToken";
export {
  UpgradedFiatTokenNewFieldsNewLogicTestContract,
  UpgradedFiatTokenNewFieldsNewLogicTestInstance
} from "./UpgradedFiatTokenNewFieldsNewLogicTest";
export {
  UpgradedFiatTokenNewFieldsTestContract,
  UpgradedFiatTokenNewFieldsTestInstance
} from "./UpgradedFiatTokenNewFieldsTest";
